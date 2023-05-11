<template>
  <main class="container" style="background-color: black">
    <div class="blogs-header">
      <h3 class="title-page-l">ABOUT US</h3>
    </div>
    <div class="border d-flex justify-content-center align-items-end">
      <div class="text-center my-5">
        <h5 class="title-page-m">OUR COLLECTION</h5>
        <p class="bg-white py-2 fw-bold" style="text-align: right">
          <router-link class="btn-primary" to="/">SEE MORE</router-link>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="background">
        <video
          loop
          class="d-block"
          id="video_background"
          preload="auto"
          autoplay="true"
          muted
          volume="0"
          style="width: 100%"
        >
          <source src="@/assets/videos/video-introduce.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="pb-5 paragraph-page">
      <p class="fw-bold pb-3 paragraph-page">
        Exquisite timepieces.<br />
        Our collection of watches offers innovative design, exceptional quality,
        and timeless elegance. The perfect blend of form and function, our
        watches feature precision movements, scratch-resistant sapphire
        crystals, and durable materials such as stainless steel and leather.
        From classic dress watches to rugged sports watches, our collection has
        something for everyone.
      </p>

      <h3 class="fw-bold py-3 paragraph-page">
        A perfect blend of form and function.
      </h3>
      Our watches are designed with both style and practicality in mind. Whether
      you're looking for a dress watch to wear to the office or a rugged sports
      watch for outdoor activities, our collection has something to suit your
      needs. Our timepieces feature precision movements, scratch-resistant
      sapphire crystals, and durable materials such as stainless steel and
      leather. With a range of styles and features to choose from, you're sure
      to find the perfect watch for your lifestyle.
    </div>

    <div class="list mx-5 mb-5 paragraph-page">
      <h3 class="fw-bold py-3">Innovative design and exceptional quality.</h3>
      Our new arrivals showcase the latest in watch design and technology. From
      sleek and modern to classic and elegant, our watches feature the finest
      materials and attention to detail. Each timepiece is a work of art,
      carefully crafted to provide years of reliable performance and timeless
      style.
    </div>
    <div class="container-fluid pb-5">
      <div class="row first-row justify-content-center">
        <div class="col">
          <img
            src="@/assets/images/about.jpg"
            style="width: 100%; padding: 0 80px"
          />
        </div>
      </div>
    </div>
  </main>

  <subscribe-item />
</template>
<script setup>
import SubscribeItem from "@/components/SubscribeItem.vue";
</script>
<style scoped>
.blogs-header h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
</style>
