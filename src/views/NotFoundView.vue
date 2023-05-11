<template>
  <main class="container m-4" style="background-color: black">
    <h2 style="color: white; text-align: center; text-transform: uppercase">
      404 page not found
    </h2>
    <div class="container-fluid pb-5">
      <div class="row first-row justify-content-center">
        <div class="col" style="text-align: center">
          <img
            src="@/assets/images/404.jpg"
            style="width: 60%; padding: 0 80px; background-color: black"
          />
        </div>
      </div>
      <router-link to="/" class="w-10">
        <button
          type="button"
          class="waves-effect waves-light btn btn-primary btn-addToCart"
          style="margin: 16px 0px 36px"
        >
          Continue Shopping
        </button>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>
