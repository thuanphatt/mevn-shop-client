<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container" style="margin-bottom: 50px">
      <div class="row">
        <div class="col offset-m3 m6">
          <h1
            class="text-center title-page-l text-white"
            style="margin-bottom: 50px; text-align: center; font-size: 46px"
          >
            Login
          </h1>

          <form method="POST" v-on:submit.prevent="doLogin">
            <div class="form-group">
              <label class="text-white">Enter email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                autocomplete="off"
                style="color: white"
              />
            </div>

            <br />

            <div class="form-group">
              <label class="text-white">Enter password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                autocomplete="off"
                style="color: white"
              />
            </div>

            <br />
            <router-link to="/forgotPassword" style="color: white"
              >Forgotten password?</router-link
            >
            <input
              type="submit"
              value="Login"
              v-bind:disabled="isLoading"
              name="submit"
              class="btn btn-primary btn-addToCart"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import store from "../vuex/store";

export default {
  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    doLogin: async function () {
      const form = event.target;
      const formData = new FormData(form);

      this.isLoading = true;

      const response = await axios.post(this.$apiURL + "/login", formData);

      this.isLoading = false;
      swal.fire("Login", response.data.message, response.data.status);

      if (response.data.status == "success") {
        form.reset();

        // get access token from server
        const accessToken = response.data.accessToken;
        // save in local storage
        localStorage.setItem(this.$accessTokenKey, accessToken);

        this.$headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        };

        store.commit("setLogin", true);
        store.commit("setUser", response.data.user);

        setTimeout(function () {
          var elems = document.querySelectorAll(".dropdown-trigger");
          // eslint-disable-next-line no-unused-vars, no-undef
          var instances = M.Dropdown.init(elems, {});
        }, 500);

        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
label {
  font-size: initial;
}
</style>
