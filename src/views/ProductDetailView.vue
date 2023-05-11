<template>
  <div
    class="section black"
    id="index-banner"
    v-if="product != null"
    style="padding: 40px 0"
  >
    <div class="container-fluid" style="height: 600px">
      <div class="row">
        <div class="col m6">
          <div class="carousel" style="overflow: visible">
            <a
              class="carousel-item"
              href="#one!"
              v-for="(image, index) in product.images"
              :key="index"
            >
              <img
                v-bind:src="this.$apiURL + '/' + image"
                style="
                  width: 500px;
                  background-size: cover;
                  background-position: center;
                  background-color: rgba(255, 255, 255, 0.15);
                "
              />
            </a>
          </div>
        </div>

        <div class="col m6">
          <h1
            v-text="product.name"
            style="
              font-size: 36px;
              font-weight: bold;
              color: white;
              text-align: center;
            "
          ></h1>
          <h4
            v-text="`$${product.price}`"
            style="
              color: whitesmoke;
              font-size: 24px;
              margin: 24px 0;
              letter-spacing: 2px;
              text-align: center;
            "
          ></h4>
          <p
            style="
              text-align: center;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-size: 13px;
              line-height: 16px;
              font-family: Montserrat, sans-serif;
              letter-spacing: 1.95px;
              color: rgba(255, 255, 255, 0.8);
              text-transform: uppercase;
            "
          >
            <img
              src="@/assets/images/fire.png"
              alt="fire"
              style="
                object-fit: cover;
                width: 12px;
                height: 12px;
                margin-bottom: -1px;
              "
            />
            In stock: <span v-text="product.itemsInStock || 0" st></span>
          </p>

          <button
            v-if="isInCart"
            type="button"
            class="waves-effect waves-light btn btn-primary btn-addToCart"
            v-on:click="removeFromCart"
          >
            Remove from cart
          </button>
          <button
            v-else
            type="button"
            class="waves-effect waves-light btn btn-primary btn-addToCart"
            v-on:click="addToCart"
          >
            Add to cart
          </button>
          <p
            v-text="product.description"
            style="
              text-align: left;
              max-width: 680px;
              padding-left: 72px;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-size: 13px;
              line-height: 17px;
              font-family: Montserrat, sans-serif;
              letter-spacing: 0.65px;
              color: rgba(255, 255, 255, 1);
            "
          ></p>

          <like-item href="https://www.facebook.com/D1Milano/" />
        </div>
      </div>
    </div>

    <div class="container" style="padding: 100px 0">
      <div class="row">
        <div
          class="col s12"
          style="
            height: auto;
            overflow: hidden;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            margin-bottom: 10px;
          "
        >
          <ul
            class="tabs"
            id="tabs"
            style="
              text-align: center;
              font-style: normal;
              font-variant: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 40px;
              font-family: Montserrat, sans-serif;
              letter-spacing: 2.4px;
              color: #fff;
              text-transform: uppercase;
              background-color: transparent;
            "
          >
            <li class="tab col s12">
              <a class="active" href="#specifications" style="color: #fff"
                >Specifications</a
              >
            </li>
          </ul>

          <div id="specifications" class="col s12">
            <table class="table">
              <tr v-for="(spec, index) in product.specs" :key="index">
                <th
                  v-text="spec.key"
                  style="
                    text-align: left;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: normal;
                    font-size: 13px;
                    line-height: 13px;
                    font-family: Montserrat, sans-serif;
                    letter-spacing: 0.65px;
                    color: rgba(255, 255, 255, 1);
                  "
                ></th>
                <td
                  v-text="spec.value"
                  style="
                     {
                      text-align: right;
                      font-style: normal;
                      font-variant: normal;
                      font-weight: normal;
                      font-size: 13px;
                      line-height: 40px;
                      font-family: Montserrat, sans-serif;
                      letter-spacing: 0.65px;
                      color: rgba(255, 255, 255, 1);
                    }
                  "
                ></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- <div v-if="isDone">
        <comments-item
          href="https://developers.facebook.com/docs/plugins/comments#configurator"
        />
      </div>
      <div v-else>
        <pre-loading-item />
      </div> -->
      <comments-item
        href="https://developers.facebook.com/docs/plugins/comments#configurator"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import store from "../vuex/store";

import LikeItem from "@/components/LikeItem.vue";
import CommentsItem from "@/components/CommentsItem.vue";
// import PreLoadingItem from "@/components/PreLoadingItem.vue";

export default {
  components: {
    LikeItem,
    CommentsItem,
    // PreLoadingItem,
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-reserved-keys
      _id: this.$route.params._id,
      product: null,
      isInCart: false,
      // isDone: false,
    };
  },

  methods: {
    loadFacebookSDK: function () {
      if (window.FB) {
        // Kiểm tra xem plugin đã được load hoàn tất hay chưa.
        // eslint-disable-next-line no-undef
        FB.XFBML.parse(); // Gọi lại hàm FB.XFBML.parse() sau khi plugin đã được load.
      }
      window.fbAsyncInit = function () {
        // eslint-disable-next-line no-undef
        FB.init({
          appId: process.env.APP_ID_FACEBOOK,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v11.0",
        });
        // eslint-disable-next-line no-undef
        FB.XFBML.parse();
        // this.isDone = true;
        // console.log("status", this.isDone);
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    },
    getDateInFormat: function (timestamp) {
      let date = new Date(timestamp);
      date =
        date.getDate() +
        " " +
        store.getters.getMonths[date.getMonth()] +
        ", " +
        date.getFullYear();
      return date;
    },

    removeFromCart: function () {
      const cookieParts = document.cookie.split("; ");
      for (let a = 0; a < cookieParts.length; a++) {
        const keyValue = cookieParts[a].split("=");
        if (keyValue[0] == "products") {
          const products = JSON.parse(keyValue[1]);
          for (let b = 0; b < products.length; b++) {
            if (products[b]._id == this._id) {
              products.splice(b, 1);
              document.cookie = "products=" + JSON.stringify(products);

              swal.fire(
                "Remove from cart",
                "Product has been removed from cart",
                "success"
              );
              this.isInCart = false;
              store.commit("setCartCounter", products.length);
              return;
            }
          }
        }
      }
    },

    addToCart: function () {
      if (this.product == null) {
        return;
      }

      let products = [];
      const cookieParts = document.cookie.split("; ");
      for (let a = 0; a < cookieParts.length; a++) {
        const keyValue = cookieParts[a].split("=");
        if (keyValue[0] == "products") {
          products = JSON.parse(keyValue[1]);
          break;
        }
      }

      products.push({
        _id: this._id,
        name: this.product.name,
        price: this.product.price,
        units: 1,
      });
      document.cookie = "products=" + JSON.stringify(products);

      swal.fire("Add to cart", "Product has been added to cart", "success");
      this.isInCart = true;
      store.commit("setCartCounter", products.length);
    },

    getData: async function () {
      const formData = new FormData();
      formData.append("_id", this._id);

      const response = await axios.post(
        this.$apiURL + "/products/fetchSingle",
        formData
      );

      if (response.data.status == "success") {
        // console.log(response.data.product)
        this.product = response.data.product;

        setTimeout(function () {
          var elems = document.querySelectorAll(".carousel");
          // eslint-disable-next-line no-unused-vars, no-undef
          var instances = M.Carousel.init(elems, {});
        }, 500);
      } else {
        swal.fire("Error", response.data.message, "error");
      }
    },
  },

  mounted: function () {
    this.loadFacebookSDK();
    this.getData();

    const cookieParts = document.cookie.split("; ");
    for (let a = 0; a < cookieParts.length; a++) {
      const keyValue = cookieParts[a].split("=");
      if (keyValue[0] == "products") {
        const products = JSON.parse(keyValue[1]);
        for (let b = 0; b < products.length; b++) {
          if (products[b]._id == this._id) {
            this.isInCart = true;
            return;
          }
        }
      }
    }

    setTimeout(function () {
      var el = document.querySelectorAll(".tabs");
      // eslint-disable-next-line no-unused-vars, no-undef
      var instance = M.Tabs.init(el, {});
    }, 1000);
  },
};
</script>
