<template>
  <section class="featured-products black">
    <div class="container" style="margin-left: 135px">
      <div class="products">
        <div class="product">
          <div class="img-container">
            <img src="@/assets/images/featured.jpg" alt="" />
            <div class="content">
              <h6>New Season</h6>
              <h3>lookbook collection</h3>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="img-container">
            <img src="@/assets/images/featured1.jpg" alt="" />
            <div class="content-right">
              <h6>Sale</h6>
              <h3>Get UP to <span>50% off</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.featured-products {
  padding-bottom: 70px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.products .img-container {
  position: relative;
  height: 100%;
}
.products img {
  object-fit: cover;
  height: 100%;
  max-width: 610px;
}
.products .content {
  position: absolute;
  top: 50%;
  left: 36%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: #fff;
  text-align: center;
}
.content-right {
  position: absolute;
  top: 50%;
  left: 68%;
  padding: 16px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  text-align: center;
}
.content h6 {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 6px;
  opacity: 0.6;
  text-transform: uppercase;
}
.content h3,
.content-right h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
}
.content-right h3 span {
  color: #e91e63;
}
</style>
