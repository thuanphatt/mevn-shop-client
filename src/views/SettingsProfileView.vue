<template>
  <div class="section no-pad-bot" id="index-banner">
    <main class="container" style="margin-bottom: 50px; width: 30%">
      <div>
        <h3
          class="title-page-l"
          style="font-weight: 600; font-size: 22px; line-height: 25px"
        >
          Edit profile
        </h3>
        <form @submit.prevent="submit">
          <div>
            <label>Name:</label>
            <input v-model="name" style="color: white" required />
          </div>
          <div>
            <label>Email:</label>
            <input v-model="email" style="color: white" required />
          </div>
          <button type="submit" class="btn-addToCart">Save Changes</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  async created() {
    const userId = this.$route.params.id;
    try {
      const response = await axios.get(this.$apiURL + `/getUser/${userId}`);
      this.name = response.data.name;
      this.email = response.data.email;
    } catch (error) {
      console.error(error);
      swal.fire("Error", "error");
    }
  },
  methods: {
    async submit() {
      const userId = this.$route.params.id;

      try {
        const response = await axios.put(
          this.$apiURL + `/edit-profile/users/${userId}`,
          {
            name: this.name,
            email: this.email,
          }
        );

        console.log(response.data);
        swal.fire(
          "Edit profile",
          "Profile has been edited sucessfully",
          "success"
        );
      } catch (error) {
        console.error(error);
        swal.fire("Error", "Not have a change", "error");
      }
    },
  },
  mounted() {
    const userId = this.$route.params.id;
    axios.get(this.$apiURL + `/getUser/${userId}`).then((response) => {
      this.name = response.data.name;
      this.email = response.data.email;
    });
  },
};
</script>
