<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <div class="row">
        <div class="col m12">
          <h1
            class="text-center title-page-l"
            style="font-weight: 600; font-size: 22px; line-height: 25px"
          >
            Cart
          </h1>

          <div class="card" style="background-color: transparent">
            <div class="card-body card-bg-primary">
              <div class="table-responsive p-0">
                <table
                  class="table align-items-center justify-content-center mb-0"
                  id="products-table"
                >
                  <thead>
                    <tr class="title-card">
                      <th>Name</th>

                      <th>Price</th>
                      <th>Units</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="product in products" v-bind:key="product._id">
                      <td v-text="product.name" class="title-name-card"></td>
                      <td
                        v-text="'$' + product.price"
                        class="title-price-card"
                      ></td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          name="unit"
                          v-bind:value="product.units"
                          v-bind:data-id="product._id"
                          v-on:change="unitChanged"
                          style="
                            color: rgba(255, 255, 255, 1);
                            font-family: MontSerrat, sans-serif;
                            font-weight: 300;
                            margin-bottom: 0;
                            font-size: 11px;
                          "
                        />
                      </td>
                      <td
                        v-text="'$' + product.price * product.units"
                        class="title-price-card"
                      ></td>
                      <td>
                        <button
                          type="button"
                          class="waves-effect waves-light transparent btn"
                          v-on:click="removeFromCart"
                          v-bind:data-id="product._id"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td colspan="4" style="text-align: right">
                        <div
                          style="margin-right: 20px"
                          class="title-price-card"
                        >
                          <b>Total: </b>
                          $<span v-text="total"></span>
                        </div>
                      </td>

                      <td>
                        <router-link
                          class="waves-effect waves-light blue lighten-1 btn"
                          to="/checkout"
                          v-if="login"
                        >
                          Checkout
                        </router-link>
                        <router-link
                          class="waves-effect waves-light blue lighten-1 btn"
                          to="/login"
                          v-else
                        >
                          Checkout
                        </router-link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "../../public/assets/js/materialize";
import store from "../vuex/store";

export default {
  data() {
    return {
      products: [],
      isLoggedIn: false,
    };
  },

  computed: {
    total: function () {
      let total = 0;
      for (let a = 0; a < this.products.length; a++) {
        total += this.products[a].units * this.products[a].price;
      }
      return total;
    },
    login: function () {
      return store.getters.getLogin;
    },
  },

  methods: {
    unitChanged: function () {
      const target = event.target;
      const _id = target.getAttribute("data-id");
      const units = parseInt(target.value);

      const cookieParts = document.cookie.split("; ");
      for (let a = 0; a < cookieParts.length; a++) {
        const keyValue = cookieParts[a].split("=");
        if (keyValue[0] == "products") {
          const products = JSON.parse(keyValue[1]);
          for (let b = 0; b < products.length; b++) {
            if (products[b]._id == _id) {
              products[b].units = units;
              document.cookie = "products=" + JSON.stringify(products);
              this.products = products;
            }
          }
        }
      }
    },

    removeFromCart: function () {
      const button = event.target;
      const _id = button.getAttribute("data-id");

      const cookieParts = document.cookie.split("; ");
      for (let a = 0; a < cookieParts.length; a++) {
        const keyValue = cookieParts[a].split("=");
        if (keyValue[0] == "products") {
          const products = JSON.parse(keyValue[1]);
          for (let b = 0; b < products.length; b++) {
            if (products[b]._id == _id) {
              products.splice(b, 1);
              document.cookie = "products=" + JSON.stringify(products);
              this.products = products;
              store.commit("setCartCounter", products.length);
              return;
            }
          }
        }
      }
    },
  },

  mounted: async function () {
    const cookieParts = document.cookie.split("; ");
    for (let a = 0; a < cookieParts.length; a++) {
      const keyValue = cookieParts[a].split("=");
      if (keyValue[0] == "products") {
        const products = JSON.parse(keyValue[1]);
        this.products = products;
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      // eslint-disable-next-line no-unused-vars
      var instances = M.Collapsible.init(elems, {});
    });
  },
};
</script>
