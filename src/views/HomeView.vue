<template>
  <main>
    <div class="container mt-n5">
      <section>
        <MDBCard>
          <MDBCardBody v-if="useCredential.isLoggedIn()">
            <div class="row gx-5 gy-3">
              <div class="col-12 col-md-6">
                <small class="mb-2 d-block"
                  >มีเรื่องราวที่อยากบอกต่อ?
                  มาเขียนเรื่องราวไว้ที่นี่ไม่ให้ตายไปตามกาลเวลา</small
                >
                <RouterLink
                  to="/story/create"
                  color="primary"
                  class="m-0 btn text-light btn-primary"
                  size="sm"
                >
                  <i class="fa fa-plus fa-sm me-2" aria-hidden="true"> </i>
                  เขียนเรื่องราวของคุณ</RouterLink
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
                  <RouterLink class="px-4 auth-link" to="/signin"
                    >เข้าสู่ระบบ</RouterLink
                  >
                  <div class="vr"></div>
                  <RouterLink class="px-4 auth-link" to="/signup"
                    >สมัครสมาชิก</RouterLink
                  >
                </small>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </section>
    </div>
    <div class="container mt-4 gy-3">
      <div class="text-center" v-if="isLoading">
        <Vue3Lottie
          animationLink="https://assets3.lottiefiles.com/packages/lf20_1a8dx7zj.json"
          :height="150"
          :width="150"
          class="mb-2"
        />
        <small class="text-muted">กำลังโหลดเรื่องราว...</small>
      </div>
      <div v-else>
        <RouterLink
          :to="'/read/' + story.storyId"
          v-for="story in stories"
          :key="story.storyId"
          ><ContentListCard
            :coverUrl="story.content.coverUrl"
            :title="story.content.storyTitle"
            :editorContent="story.content.editorContent"
        /></RouterLink>
      </div>
    </div>
  </main>
</template>
<script setup>
import { RouterLink } from "vue-router";

import { MDBCard, MDBCardBody } from "mdb-vue-ui-kit";
import ContentListCard from "@/components/ContentListCard.vue";
import { useUserCredentialsStore } from "@/stores/userCredentials";

import { ref } from "vue";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const useCredential = useUserCredentialsStore();
const isLoading = ref(true);
const db = getFirestore(initializeApp);
const docRef = collection(db, "stories");
const stories = ref([]);
const getCollections = (docRef) => {
  return new Promise((resolve, reject) => {
    getDocs(docRef)
      .then((collections) => {
        collections.docs.forEach((val) => {
          stories.value.push({ content: val.data(), storyId: val.id });
        });
        isLoading.value = false;
        resolve(collections.docs);
      })
      .catch((err) => {
        isLoading.value = true;
        alert(err.message);
      }),
      reject;
  });
};
getCollections(docRef);
console.log(stories.value);
</script>
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
