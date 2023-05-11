<template>
  <div class="section" id="index-banner" style="padding-top: 0">
    <div class="container">
      <div class="contact row">
        <div class="col-sm-6">
          <h3 class="title-page-l">Contact Us</h3>
          <form action="" class="row">
            <div class="row justify-content-between">
              <div class="col s6">
                <div class="input-container col-sm-6 pe-2">
                  <label for="name">Name</label>
                  <input
                    required
                    class="form-control"
                    style="padding: 5px; color: white; font-size: 13px"
                    maxlength="20"
                    type="text"
                    placeholder="Type your name"
                  />
                </div>
                <div class="input-container col-sm-6">
                  <label>Email</label>
                  <input
                    required
                    class="form-control"
                    style="padding: 5px; color: white; font-size: 13px"
                    maxlength="20"
                    type="text"
                    placeholder="Type your email address"
                  />
                </div>
              </div>
              <div class="col s6">
                <div class="input-container">
                  <label for="messages">Messages</label>
                  <textarea
                    required
                    class="col-12 mt-2 form-control"
                    style="
                      padding: 10px;
                      height: 138px;
                      margin-top: 6px;
                      color: white;
                      border: 1px solid rgba(255, 255, 255, 0.15);
                    "
                    name="messages"
                    id=""
                    cols="30"
                    rows="3"
                    placeholder="Write messages to shop"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <button
            class="col-12 mt-2 btn btn-addToCart"
            type="submit"
            style="background-color: white; margin-bottom: 0"
          >
            Send
          </button>
        </div>
        <div class="col-sm-6">
          <h3>Our Location</h3>
          <div class="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841518442039!2d105.76804037446897!3d10.029933690077021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2sCan%20Tho%20University!5e0!3m2!1sen!2s!4v1682949885359!5m2!1sen!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
