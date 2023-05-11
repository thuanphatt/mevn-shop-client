<template>
  <banner-item />
  <div class="section no-pad-bot black" id="index-banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col offset-m8 m4">
          <div class="input-field col s12" style="color: whitesmoke">
            <select v-on:change="onchangeSortBy">
              <option value="newestToOldest">Newest to oldest</option>
              <option value="oldestToNewest">Oldest to newest</option>
              <option value="priceDescending">Price (descending)</option>
              <option value="priceAscending">Price (ascending)</option>
            </select>
            <label>Sort by</label>
          </div>
        </div>
      </div>

      <div class="row" v-if="isLoading">
        <div class="col offset-m6 m4">
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>

              <div class="gap-patch">
                <div class="circle"></div>
              </div>

              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="margin-bottom: 0px">
        <div class="col">
          <div class="card" style="background: transparent; border-radius: 5px">
            <div class="card-body">
              <p
                style="
                  color: white;
                  cursor: pointer;
                  padding: 8px;
                  text-align: center;
                  border-radius: 5px;
                  background-color: black;
                  box-shadow: rgb(0, 56, 56) 0px 20px 30px -10px;
                "
                v-on:click="onclickAllCategory"
              >
                ALL
              </p>
            </div>
          </div>

          <div
            class="card"
            style="background: transparent; border-radius: 5px"
            v-for="(category, index) in categories"
            :key="index"
          >
            <div class="card-body">
              <p
                v-text="category"
                class="btn-primary"
                style="padding: 8px"
                v-on:click="onclickCategory"
              ></p>
            </div>
          </div>
        </div>

        <div class="col m11">
          <div class="row" style="margin-left: 1.25rem; margin-right: 4.25rem">
            <div
              class="col m4"
              v-for="product in products.slice(0, 6)"
              v-bind:key="product._id"
            >
              <div class="card grey darken-4">
                <div class="card-content white-text">
                  <router-link v-bind:to="'/product/' + product._id">
                    <img
                      v-if="product.images.length > 0"
                      v-bind:src="this.$apiURL + '/' + product.images[0]"
                      style="width: 100%; height: 300px; object-fit: contain"
                    />
                  </router-link>
                  <router-link v-bind:to="'/product/' + product._id">
                    <span
                      class="card-title"
                      v-text="product.name"
                      style="color: white; font-weight: 500"
                    ></span>
                  </router-link>
                  <p>
                    $<span v-text="product.price" class="card-price"></span>
                  </p>
                </div>

                <div class="card-action">
                  <router-link v-bind:to="'/product/' + product._id"
                    >More detail</router-link
                  >
                  <span style="float: right; color: white"
                    >In stock: <span v-text="product.itemsInStock || 0"></span
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="padding-bottom: 34px; margin-bottom: 0">
        <div class="col m4" style="margin-left: 46%">
          <button
            type="button"
            class="waves-effect black btn btn-primary"
            v-on:click="loadMore"
            ref="btnLoadMore"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  </div>

  <feature-item />
  <div class="banner-servieces black">
    <div class="service">
      <span class="icon">
        <i class="material-icons" style="color: white">flight</i>
      </span>
      <div class="details">
        <h6>FREE SHIPPING</h6>
        <p>On all USA order or order above $100</p>
      </div>
    </div>
    <div class="service">
      <span class="icon">
        <i class="material-icons" style="color: white">done</i>
      </span>
      <div class="details">
        <h6>GENUINE COMMITMENT</h6>
        <p>If detected fake up to 10 times</p>
      </div>
    </div>
    <div class="service">
      <span class="icon">
        <i class="material-icons" style="color: white">flash_on</i>
      </span>
      <div class="details">
        <h6>FAST DELIVERY</h6>
        <p>Fast delivery within 24 hours</p>
      </div>
    </div>
  </div>
  <subscribe-item />
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import store from "@/vuex/store.js";
import BannerItem from "@/components/BannerItem.vue";
import FeatureItem from "@/components/FeatureItem.vue";
import SubscribeItem from "@/components/SubscribeItem.vue";

import "/public/assets/css/style.css";

export default {
  components: {
    BannerItem,
    FeatureItem,
    SubscribeItem,
  },
  data() {
    return {
      page: 1,
      products: [],
      sortBy: "",
      categories: [],
      category: "",
      isLoading: false,
    };
  },

  computed: {
    search: function () {
      return store.getters.getSearch;
    },
  },

  methods: {
    onchangeSortBy: function () {
      this.page = 1;
      this.sortBy = event.currentTarget.value;
      this.getData();
    },

    onclickCategory: function () {
      this.page = 1;
      this.category = event.currentTarget.innerHTML;
      this.getData();
    },

    onclickAllCategory: function () {
      this.page = 1;
      this.category = event.currentTarget.innerHTML;
      window.location.reload();
      this.getData();
    },

    loadMore: function () {
      this.$refs.btnLoadMore.setAttribute("disabled", "disabled");
      this.page++;
      this.getData();
    },

    getConfigurations: async function () {
      const response = await axios.post(
        this.$apiURL + "/getConfigurations",
        null
      );

      if (response.data.status == "success") {
        const configurations = response.data.configurations;
        this.categories = configurations.categories || [];
      }
    },

    getData: async function () {
      this.isLoading = true;

      const formData = new FormData();
      formData.append("page", this.page);
      formData.append("sortBy", this.sortBy);
      formData.append("category", this.category);
      formData.append("search", this.search);

      const response = await axios.post(
        this.$apiURL + "/products/fetch",
        formData
      );

      this.isLoading = false;
      this.$refs.btnLoadMore.removeAttribute("disabled");

      if (response.data.status == "success") {
        this.products = response.data.products;
      } else {
        swal.fire("Error", response.data.message, "error");
      }
    },
  },

  mounted: function () {
    this.getConfigurations();
    this.getData();

    var elems = document.querySelectorAll("select");
    // eslint-disable-next-line no-unused-vars, no-undef
    var instances = M.FormSelect.init(elems, {});
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    search: function (to, from) {
      this.getData();
    },
  },
};
</script>
<style scoped>
.card-title {
  font-size: 18px;
  color: white;
}
.card-price {
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 18px;
  letter-spacing: 2.1px;
}

.banner-servieces {
  display: flex;
  justify-content: center;
  padding-left: 212px;
  align-items: center;
}
.banner-servieces > div {
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  width: 100%;
  display: flex;
  align-items: center;
}
.service .details {
  margin-left: 10px;
}

.details h6 {
  color: white;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
}
.details p {
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  opacity: 0.9;
  color: whitesmoke;
  font-weight: 500;
}

/* */

@media (max-width: 969px) {
  .banner-content {
    flex-wrap: wrap;
  }
  .banner-content > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
@media (max-width: 600px) {
  .category-banner .top > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .category-banner .top {
    flex-wrap: wrap;
  }
  .img-content h3 {
    font-size: 16px;
    line-height: 20px;
  }
  .banner-servieces {
    flex-wrap: wrap;
  }
  .banner-servieces > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>
