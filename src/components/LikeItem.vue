<template>
  <div
    style="margin-left: 70px"
    class="fb-like"
    :data-href="href"
    data-layout=""
    data-action="like"
    data-size=""
    data-colorscheme="dark"
    data-share="true"
    data-width="450"
    data-show-faces="true"
  >
    >
  </div>
</template>
<script>
export default {
  props: {
    href: String,
  },
  mounted() {
    if (typeof FB !== "undefined") {
      // eslint-disable-next-line no-undef
      FB.XFBML.parse();
    } else {
      document.addEventListener("facebook-sdk-ready", () => {
        // eslint-disable-next-line no-undef
        FB.XFBML.parse();
      });
    }
  },
};
</script>
