<template>
  <div class="banner">
    <div class="container">
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
            style="width: 100%; position: absolute; left: 0"
          >
            <source
              src="@/assets/videos/video-introduce.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/style.css";

// Import materialized files
import "/public/assets/css/materialize.css";
import "/public/assets/css/style.css";
import "/public/assets/js/materialize.js";

export default {};
</script>

<style scoped>
img {
  height: 100%;
}
.banner {
  border-bottom: 2px solid #f8f8f8;
  margin-bottom: 8px;
}
.banner .container {
  max-width: calc(1440px - 130px);
  padding: 0 20px;
  width: 100%;
  margin: auto;
}
</style>
