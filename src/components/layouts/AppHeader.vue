<template>
  <nav
    class="black"
    role="navigation"
    style="box-shadow: rgb(0, 56, 56) 0px 20px 30px -10px"
  >
    <div class="nav-wrapper container">
      <router-link id="logo-container" to="/" class="brand-logo w-10"
        ><i class="material-icons">watch</i></router-link
      >

      <ul class="right hide-on-med-and-down" style="text-transform: uppercase">
        <li>
          <form
            style="position: relative; top: 10px"
            v-on:submit.prevent="doSearch"
          >
            <div class="input-field">
              <input
                id="search"
                type="search"
                v-model="search"
                style="height: 50px"
                ref="searchInput"
              />
              <label class="label-icon" for="search"
                ><i class="material-icons" style="line-height: 50px"
                  >search</i
                ></label
              >
              <i
                class="material-icons"
                style="line-height: 50px"
                @click="clearSearch"
                >close</i
              >
            </div>
          </form>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/blog">Blog</router-link>
        </li>
        <li>
          <router-link to="/project">Project</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact us</router-link>
        </li>
        <li class="nav-item" v-if="!login">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>

        <li class="nav-item" v-if="!login">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>

        <li v-if="user != null">
          <!-- Dropdown Trigger -->
          <a
            class="dropdown-trigger"
            href="javascript:void(0)"
            data-target="dropdown-user"
            v-text="user.name"
            style="color: #ffab40; text-transform: none"
          ></a>

          <!-- Dropdown Structure -->
          <ul
            id="dropdown-user"
            class="dropdown-content"
            style="
              min-width: 200px;
              background-color: transparent;
              box-shadow: rgb(0, 56, 56) 0px 20px 30px -10px;
            "
          >
            <li class="off-hover">
              <a
                href="#"
                @click.prevent="(event) => doEditProfile(event, user._id)"
                class="logout-btn"
                style="font-size: 14px"
                >Edit profile</a
              >
            </li>
            <li class="off-hover" style="border-top: 1px solid white">
              <a
                href="#"
                @click.prevent="(event) => doChangePassword(event, user._id)"
                class="logout-btn"
                style="font-size: 14px"
                >Change password</a
              >
            </li>
            <li class="off-hover" style="border-top: 1px solid white">
              <a
                href="javascript:void(0)"
                v-on:click="doLogout"
                class="logout-btn"
                style="font-size: 14px"
                >Log out</a
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/cart"
            ><i class="material-icons">shopping_cart</i>
            <span
              v-if="cartCounter > 0"
              v-text="'(' + cartCounter + ')'"
              class="cart-number"
            ></span
          ></router-link>
        </li>
      </ul>

      <ul id="nav-mobile" class="sidenav"></ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
    </div>
  </nav>
</template>

<script>
import "/public/assets/css/materialize.css";
import "/public/assets/css/style.css";

import "/public/assets/js/materialize.js";
// import "/public/assets/js/init.js";

import store from "../../vuex/store";
import axios from "axios";
import swal from "sweetalert2";

import { io } from "socket.io-client";

export default {
  name: "AppHeader",

  data() {
    return {
      search: "",
    };
  },

  computed: {
    user: function () {
      return store.getters.getUser;
    },

    login: function () {
      return store.getters.getLogin;
    },

    cartCounter: function () {
      return store.getters.getCartCounter;
    },
  },

  methods: {
    doLogout: async function () {
      const response = await axios.post(this.$apiURL + "/logout", null, {
        headers: this.$headers,
      });

      if (response.data.status == "success") {
        // remove access token from local storage
        localStorage.removeItem(this.$accessTokenKey);

        this.$headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        };

        store.commit("setLogin", false);
        store.commit("setUser", null);

        this.$router.push("/login");
      } else {
        swal.fire("Error", response.data.message, "error");
      }
    },
    doEditProfile: function (event, userId) {
      event.preventDefault();
      this.$router.push(`/profile/${userId}`);
    },
    doChangePassword: function (event, userId) {
      event.preventDefault();
      this.$router.push(`/changePassword/${userId}`);
    },

    getUser: async function () {
      // check if user is logged in
      if (localStorage.getItem(this.$accessTokenKey)) {
        const response = await axios.post(this.$apiURL + "/getUser", null, {
          headers: this.$headers,
        });

        if (response.data.status == "success") {
          // user is logged in
          store.commit("setUser", response.data.user);

          global.socketIO.emit("connected", response.data.user.email);

          global.socketIO.on("newMessage", function (message) {
            store.commit("appendMessage", message);
            // eslint-disable-next-line no-undef
            M.toast({ html: "New message has been received." });
          });

          setTimeout(function () {
            var elems = document.querySelectorAll(".dropdown-trigger");
            // eslint-disable-next-line no-unused-vars, no-undef
            var instances = M.Dropdown.init(elems, {});
          }, 500);
        } else {
          // user is logged out
          localStorage.removeItem(this.$accessTokenKey);
        }

        store.commit(
          "setLogin",
          localStorage.getItem(this.$accessTokenKey) != null
        );
      }
    },

    doSearch: function () {
      store.commit("setSearch", this.search);
    },
    clearSearch: function () {
      this.search = "";
      this.$refs.searchInput.focus();
      store.commit("setSearch", this.search);
    },
  },

  mounted: function () {
    const cookieParts = document.cookie.split("; ");
    for (let a = 0; a < cookieParts.length; a++) {
      const keyValue = cookieParts[a].split("=");
      if (keyValue[0] == "products") {
        const products = JSON.parse(keyValue[1]);
        store.commit("setCartCounter", products.length);
      }
    }

    global.socketIO = io(this.$apiURL);
    this.getUser();

    var elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-undef
    M.Sidenav.init(elems, {});
  },
};
</script>
<style scoped>
.cart-number {
  position: absolute;
  top: -10px;
  right: -2px;
  font-size: 12px;
}
.logout-btn {
  font-size: 16px;
  color: white;
  background-color: black;
  border-radius: 4px;
  border: transparent;
  display: block;
  line-height: 22px;
  padding: 14px 16px;
}
.off-hover:hover {
  background-color: transparent;
}
</style>
