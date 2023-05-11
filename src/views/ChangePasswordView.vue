<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container" style="margin-bottom: 50px">
      <div class="row">
        <div class="col offset-m3 m6">
          <h1
            class="text-center title-page-l text-white"
            style="margin-bottom: 50px; text-align: center; font-size: 46px"
          >
            Change Password
          </h1>
          <form method="POST" v-on:submit.prevent="doChangePassword">
            <div class="form-group">
              <label class="text-white">Enter current password</label>
              <input
                type="password"
                class="form-control"
                name="currentPassword"
                autocomplete="off"
                style="color: white"
                v-model="currentPassword"
              />
            </div>

            <br />

            <div class="form-group">
              <label class="text-white">Enter new password</label>
              <input
                type="password"
                class="form-control"
                name="newPassword"
                autocomplete="off"
                style="color: white"
                v-model="newPassword"
              />
            </div>

            <br />

            <input
              type="submit"
              value="Change Password"
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
      currentPassword: "",
      newPassword: "",
    };
  },

  methods: {
    doChangePassword: async function () {
      const userId = store.state.user._id;
      console.log("userId:", userId);
      const updates = {
        currentPassword: this.currentPassword,
        password: this.newPassword,
      };
      try {
        const response = await axios.put(
          this.$apiURL + `/changePassword/users/${userId}`,
          updates
        );
        if (response) {
          swal.fire(
            "Change Password",
            "Password has been changed successfully",
            "success"
          );
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        swal.fire("Error", error.message, "error");
      }
    },
  },
};
</script>
