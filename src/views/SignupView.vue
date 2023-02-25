<template>
  <img
    src="https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg"
    class="main-bg position-absolute w-100"
    style="height: 100vh"
  />
  <div class="container d-flex flex-column" style="min-height: 100vh">
    <MDBCard
      class="my-auto overflow-hidden shadow"
      style="background: transparent"
    >
      <MDBRow class="g-0">
        <MDBCol md="4">
          <MDBCardImg
            fluid
            src="https://i.pinimg.com/564x/5c/17/a2/5c17a21ef6aa85a5af61ddac46a5c732.jpg"
            class="w-100"
            style="height: 430px; object-fit: cover"
          />
        </MDBCol>
        <MDBCol
          md="8"
          class="overflow-hidden text-light"
          style="backdrop-filter: blur(5px); background: rgba(0, 0, 0, 0.5)"
        >
          <MDBCardBody class="position-relative p-5" style="z-index: 5">
            <h3 class="login-title mb-5">สมัครสมาชิก</h3>
            <div v-if="true">
              <MDBInput
                class="mb-4"
                label="อีเมล์ของคุณ"
                v-model="email"
                white
                type="email"
              />
              <MDBInput
                class="mb-3"
                label="รหัสผ่าน"
                v-model="email"
                white
                type="password"
              />

              <MDBBtn color="warning" size="sm">สมัครสมาชิก</MDBBtn>
              <RouterLink
                to="/signin"
                class="text-light btn btn-sm transparent shadow-0"
                >มีบัญชีแล้ว</RouterLink
              >
            </div>
            <div class="d-flex h-100 justify-content-center" v-else>
              <div class="my-auto">
                <MDBSpinner grow color="light" />
              </div>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  </div>
</template>
<script setup>
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImg,
  MDBInput,
  MDBBtn,
  MDBSpinner,
} from "mdb-vue-ui-kit";

import { RouterLink } from "vue-router";
</script>
<style scoped>
.main-bg {
  filter: opacity(0.8);
}

.login-title {
  border-left: 4px solid red;
  padding-left: 14px;
}
.blur-bgimage {
  overflow: hidden;
  margin: 0;
  text-align: left;
}

.blur-bgimage:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;

  filter: blur(10px);
  -moz-filter: blur(10px);
  -webkit-filter: blur(10px);
  -o-filter: blur(10px);

  transition: all 2s linear;
  -moz-transition: all 2s linear;
  -webkit-transition: all 2s linear;
  -o-transition: all 2s linear;
}
</style>
