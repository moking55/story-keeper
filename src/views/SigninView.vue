<template>
  <img
    :src="randomBackground"
    class="main-bg position-absolute w-100"
    style="height: 100vh"
  />
  <div class="container d-flex flex-column" style="min-height: 100vh">
    <MDBCard
      class="my-auto overflow-hidden shadow"
      style="background: transparent"
    >
      <MDBRow class="g-0 justify-content-center">
        <MDBCol md="3" class="d-none d-md-block">
          <MDBCardImg
            fluid
            :src="randomBanners"
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
            <h3 class="login-title mb-5 mt-3">เข้าสู่ระบบ</h3>
            <div v-if="isProgress">
              <div class="d-flex h-100 justify-content-center">
                <MDBSpinner grow color="light" />
              </div>
            </div>

            <div class="my-auto" v-else>
              <div class="alert alert-danger" role="alert" v-if="firebaseError">
                {{ firebaseError }}
              </div>
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
                v-model="password"
                white
                type="password"
              />

              <MDBBtn color="warning" size="sm" @click="signIn"
                >เข้าสู่ระบบ</MDBBtn
              >
              <RouterLink
                to="/signup"
                class="text-light btn btn-sm transparent shadow-0"
                >ยังไม่มีบัญชี?</RouterLink
              >
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
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserCredentialsStore } from "@/stores/userCredentials";

const auth = useFirebaseAuth();
const [email, password] = [ref(), ref()];
const isProgress = ref(false);
const firebaseError = ref("");
const router = useRouter();
const useCredential = useUserCredentialsStore();

const randomBackground = randomObjectProperty(
  import.meta.glob("@/assets/auth_bg/*.jpg")
);
const randomBanners = randomObjectProperty(
  import.meta.glob("@/assets/auth_banners/*.jpg")
);
function randomObjectProperty(backgrounds) {
  const backgroundKeys = Object.keys(backgrounds);
  const randomIndex = Math.floor(Math.random() * backgroundKeys.length);
  return backgroundKeys[randomIndex];
}
function signIn() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      useCredential.storeUserCredentials(
        user.email,
        user.uid,
        user.displayName,
        user.emailVerified
      );
      console.log(user);
      console.log(useCredential.isLoggedIn());
      router.push("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      isProgress.value = false;
      firebaseError.value = errorMessage;

      console.log(errorCode, errorMessage);
      // ..
    });
}
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
