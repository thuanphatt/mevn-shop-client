<template>
  <div
    class="fb-comments"
    :data-href="href"
    data-width="1051"
    data-numposts="5"
    data-colorscheme="dark"
    data-order-by="reverse_time"
    style="background-color: white; border-radius: 5px"
  ></div>
</template>
<script>
export default {
  props: {
    href: String,
  },
};
</script>
