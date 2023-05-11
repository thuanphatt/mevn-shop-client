<template>
  <div class="section" id="index-banner" style="padding-top: 0">
    <div class="container">
      <h3
        class="header title-page-l"
        style="font-weight: 600; font-size: 22px; line-height: 25px"
      >
        Projects
      </h3>
      <div class="list mx-5 mb-5 paragraph-page">
        <h3 class="fw-bold py-3">CONQUER THE GAME OF ALL BLACK WATCHES</h3>
        Our new arrivals showcase the latest in watch design and technology.
        From sleek and modern to classic and elegant, our watches feature the
        finest materials and attention to detail. Each timepiece is a work of
        art, carefully crafted to provide years of reliable performance and
        timeless style.
      </div>

      <div class="row">
        <div class="container-fluid pb-5">
          <div class="row first-row justify-content-center">
            <div class="col">
              <img
                src="@/assets/images/project.png"
                style="width: 100%; padding: 0 80px"
              />
            </div>
          </div>
        </div>
        <div class="pb-5 paragraph-page">
          <p class="fw-bold pb-3 paragraph-page">
            Exquisite timepieces.<br />
            Our collection of watches offers innovative design, exceptional
            quality, and timeless elegance. The perfect blend of form and
            function, our watches feature precision movements, scratch-resistant
            sapphire crystals, and durable materials such as stainless steel and
            leather. From classic dress watches to rugged sports watches, our
            collection has something for everyone.
          </p>
        </div>
        <div class="row">
          <div
            class="background"
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <video
              loop
              class="d-block"
              id="video_background"
              preload="auto"
              autoplay="true"
              muted
              volume="0"
              style="width: 50%; margin-right: 100px"
            >
              <source src="@/assets/videos/project.mp4" type="video/mp4" />
            </video>
            <p class="fw-bold pb-3 paragraph-page">
              Exquisite timepieces.<br />
              Engineered from a molecular experiment by D1 MILANO LABORATORIES,
              to birth timepieces layered with a full black coat.
              scratch-resistant sapphire crystals, and durable materials such as
              stainless steel and leather. From classic dress watches to rugged
              sports watches, our collection has something for everyone.
            </p>
          </div>
        </div>
        <div class="col offset-m3 s12 m6">
          <div class="card card-bg-primary" style="padding-left: 0">
            <div class="card-content center"></div>

            <div class="card-content center" style="padding-top: 0">
              <h4 class="white-text" style="text-transform: uppercase">
                Projects I've done
              </h4>
            </div>

            <ul class="collection center title-card" style="border: none">
              <li
                class="collection-item"
                style="background: rgba(31, 31, 31, 1)"
              >
                <a
                  class="title-card"
                  href="javascript:void(0)"
                  v-on:click="showDemo('project1')"
                >
                  D1 Milano Sports
                </a>
              </li>
              <li
                class="collection-item"
                style="background: rgba(31, 31, 31, 1)"
              >
                <a
                  class="title-card"
                  href="javascript:void(0)"
                  v-on:click="showDemo('project2')"
                >
                  D1 Milano Retro Automatic
                </a>
              </li>
              <li
                class="collection-item"
                style="background: rgba(31, 31, 31, 1)"
              >
                <a
                  class="title-card"
                  href="javascript:void(0)"
                  v-on:click="showDemo('project3')"
                >
                  D1 Milano Delta 001 Collection
                </a>
              </li>
              <li
                class="collection-item"
                style="background: rgba(31, 31, 31, 1)"
              >
                <a
                  class="title-card"
                  href="javascript:void(0)"
                  v-on:click="showDemo('project4')"
                >
                  D1 Milano Ultra Thin
                </a>
              </li>
            </ul>

            <div class="card-content center">
              <div class="row">
                <div class="col s12 title-price-card">
                  <a style="color: rgba(255, 255, 255, 1)">thphattgmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="project-modal" class="modal black">
    <div class="modal-content">
      <h5 class="modal-title title-name-card center" v-text="projectName"></h5>

      <iframe
        width="560"
        height="515"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        v-bind:src="porjectDemo"
        allowfullscreen
        style="width: 100%"
      ></iframe>
    </div>

    <div class="modal-footer black">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"
        >Close</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "",
      porjectDemo: "",
    };
  },

  methods: {
    showDemo: function (type) {
      this.projectName = event.target.innerHTML;

      if (type == "project1") {
        this.porjectDemo = "https://www.youtube.com/embed/MdiOgYSpz_w";
      }

      if (type == "project2") {
        this.porjectDemo = "https://www.youtube.com/embed/3Skv9DVRy5w";
      }

      if (type == "project3") {
        this.porjectDemo = "https://www.youtube.com/embed/BG8FvMbXnKQ";
      }

      if (type == "project4") {
        this.porjectDemo = "https://www.youtube.com/embed/HdhzyXukIdE";
      }

      // eslint-disable-next-line no-undef
      const instance = M.Modal.getInstance(
        document.getElementById("project-modal")
      );
      instance.open();
    },
  },

  mounted: function () {
    const elems = document.querySelectorAll(".modal");
    // eslint-disable-next-line no-unused-vars, no-undef
    const instances = M.Modal.init(elems, {});
  },
};
</script>
