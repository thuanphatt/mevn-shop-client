<template>
  <main class="blogs container_body container">
    <div class="blogs-header">
      <h3 class="title-page-l">BLOG</h3>
      <a href="#"> SEE ALL </a>
    </div>
    <div class="blogs-wrapper">
      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/1.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>Baume et Mercier - Riviera 39 mm</h3>
          <p class="blog-content-desc">
            Immediately recognizable with its twelve-sided bezel, the Riviera
            was launched by Baume et Mercier in 1973, hence celebrating half a
            century this year
          </p>
        </div>
      </div>
      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/2.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>TAG Heuer - Carrera Chronograph Glassbox Tourbillon 42 mm</h3>
          <p class="blog-content-desc">
            TAG Heuer has recently unveiled the new Carrera Chronograph Glassbox
            Tourbillon 42 mm. Alongside the 39 mm chronographs that we presented
            here, this stunning model also features a redesigned sapphire
            crystal that covers the full diameter of the watch.
          </p>
        </div>
      </div>
      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/3.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>
            Jaeger-LeCoultre - Reverso Tribute Duoface Tourbillon in Pink Gold
          </h3>
          <p class="blog-content-desc">
            Five years after the first Reverso combining the duoface concept
            with a tourbillon (you an read about it here), Jaeger-LeCoultre
            unveiled the Reverso Tribute Duoface Tourbillon in a new
            interpretation in pink gold exquisitely hand-decorated in the
            Manufacture’s own Métiers Rares atelier.
          </p>
        </div>
      </div>
      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/3.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>
            Jaeger-LeCoultre - Reverso Tribute Duoface Tourbillon in Pink Gold
          </h3>
          <p class="blog-content-desc">
            Five years after the first Reverso combining the duoface concept
            with a tourbillon (you an read about it here), Jaeger-LeCoultre
            unveiled the Reverso Tribute Duoface Tourbillon in a new
            interpretation in pink gold exquisitely hand-decorated in the
            Manufacture’s own Métiers Rares atelier.
          </p>
        </div>
      </div>
      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/2.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>TAG Heuer - Carrera Chronograph Glassbox Tourbillon 42 mm</h3>
          <p class="blog-content-desc">
            TAG Heuer has recently unveiled the new Carrera Chronograph Glassbox
            Tourbillon 42 mm. Alongside the 39 mm chronographs that we presented
            here, this stunning model also features a redesigned sapphire
            crystal that covers the full diameter of the watch.
          </p>
        </div>
      </div>

      <div class="blog">
        <div class="img-container">
          <img src="@/assets/images/1.png" alt="" />
        </div>
        <div class="blog-content">
          <h3>Baume et Mercier - Riviera 39 mm</h3>
          <p class="blog-content-desc">
            Immediately recognizable with its twelve-sided bezel, the Riviera
            was launched by Baume et Mercier in 1973, hence celebrating half a
            century this year
          </p>
        </div>
      </div>
    </div>
  </main>
  <subscribe-item />
</template>

<script setup>
import SubscribeItem from "./SubscribeItem.vue";
</script>

<style scoped>
.blogs {
  overflow: hidden;
}
.blogs .blog {
  margin-right: 8px;
  max-width: 320px;
}

.blogs .blogs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}
.blogs-header h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.blogs-header a {
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: #121212;
  opacity: 0.6;
}
.blogs-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.blog .blog-content {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 180px;
  width: 100%;
  transform: translateY(-100px);
  background-color: #fff;
  padding: 24px 16px;
}
.img-container img {
  width: 100%;
}
.blog-content h3 {
  font-size: 26px;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 969px) {
  .blogs-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .blog .blog-content {
    max-width: 100%;
    transform: translateY(0px);
  }
}
@media (max-width: 600px) {
  .blogs-wrapper {
    grid-template-columns: 1fr;
  }
  .blog .blog-content {
    padding: 10px 0px;
  }
}
</style>
