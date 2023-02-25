<script setup>
import { RouterLink } from "vue-router";

import { MDBCard, MDBCardBody, MDBBtn } from "mdb-vue-ui-kit";
import ContentListCard from "@/components/ContentListCard.vue";
</script>

<template>
  <main>
    <div class="container mt-n5">
      <section>
        <MDBCard>
          <MDBCardBody v-if="!true">
            <div class="row gx-5 gy-3">
              <div class="col-12 col-md-6">
                <small class="mb-2 d-block"
                  >มีเรื่องราวที่อยากบอกต่อ?
                  มาเขียนเรื่องราวไว้ที่นี่ไม่ให้ตายไปตามกาลเวลา</small
                >
                <MDBBtn color="primary" class="d-block m-0" size="sm">
                  <i class="fa fa-plus fa-sm me-2" aria-hidden="true"> </i>
                  เขียนเรื่องราวของคุณ</MDBBtn
                >
              </div>
              <div class="col-6 col-md-3 border-start border-end">
                <small class="mb-2">เรื่องราวทั้งหมด</small>
                <h4>0</h4>
              </div>
              <div class="col-6 col-md-3">
                <small class="mb-2">เรื่องราวที่ฉันเขียน</small>
                <h4>0</h4>
              </div>
            </div>
          </MDBCardBody>
          <MDBCardBody v-else>
            <div class="row gx-5 gy-3">
              <div class="col-12 text-center">
                <small class="mb-2 d-block"
                  >มีเรื่องราวที่อยากบอกต่อ?
                  มาเขียนเรื่องราวไว้ที่นี่ไม่ให้ตายไปตามกาลเวลา</small
                >
                <small
                  class="d-flex justify-content-center"
                  style="font-weight: 500"
                >
                  <RouterLink class="px-4 auth-link" to="/"
                    >เข้าสู่ระบบ</RouterLink
                  >
                  <div class="vr"></div>
                  <RouterLink class="px-4 auth-link" to="/"
                    >สมัครสมาชิก</RouterLink
                  >
                </small>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </section>
    </div>
    <div class="container mt-5 gy-3">
      <!-- <div class="text-center">
        <Vue3Lottie
          animationLink="https://assets3.lottiefiles.com/packages/lf20_1a8dx7zj.json"
          :height="150"
          :width="150"
          class="mb-2"
        />
        <small class="text-muted">กำลังโหลดเรื่องราว...</small>
      </div> -->
      <RouterLink to="/feed"><ContentListCard /></RouterLink>
      <RouterLink to="/feed"><ContentListCard /></RouterLink>
      <RouterLink to="/feed"><ContentListCard /></RouterLink>
    </div>
  </main>
</template>

<style scoped>
a {
  color: unset;
}
a:hover,
a:active {
  color: #16a085;
}
.auth-link:hover {
  font-weight: bold;
}
</style>
