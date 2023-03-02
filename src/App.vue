<script setup>
import { RouterView } from "vue-router";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";

import { ref } from "vue";
import bgWallpaper from "@/assets/wallpaper.jpg";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
import router from "./router";
import { useUserCredentialsStore } from "./stores/userCredentials";

const useCredential = useUserCredentialsStore();
const auth = useFirebaseAuth();
const navCollapes = ref(false);

onAuthStateChanged(useFirebaseAuth(), (user) => {
  if (user) {
    useCredential.storeUserCredentials(
      user.email,
      user.uid,
      user.displayName,
      user.emailVerified
    );
  }
});

function signOutButton() {
  signOut(auth)
    .then(() => {
      useCredential.clearState();
      alert("Sign-out successful");
      router.push("/");
    })
    .catch(() => {
      alert("An error happened during the sign-out process");
    });
}
</script>

<template>
  <header class="fixed-top">
    <MDBNavbar
      expand="lg"
      class="position-relative py-3"
      dark
      bg="dark"
      container
    >
      <div class="container">
        <MDBNavbarBrand class="brand-centered" to="/"
          >Archived Project</MDBNavbarBrand
        >
        <MDBNavbarToggler
          class="position-relative me-auto py-2"
          @click="($event) => (navCollapes = !navCollapes)"
          target="#navbarSupportedContent"
        ></MDBNavbarToggler>
        <MDBCollapse
          v-model="navCollapes"
          class="position-relative"
          id="navbarSupportedContent"
        >
          <MDBNavbarNav class="mb-2 mb-lg-0 me-auto">
            <MDBNavbarItem to="/" active>
              <i class="fa fa-home me-2" aria-hidden="true"></i>
              <span class="d-inline d-lg-none">Home</span>
            </MDBNavbarItem>
            <MDBNavbarItem to="/feed" active>
              <i class="fa fa-poll-h me-2" aria-hidden="true"></i>
              <span class="d-inline d-lg-none">Feed</span>
            </MDBNavbarItem>
            <MDBNavbarItem to="/philosophy" active>
              <i class="fa fa-question me-2" aria-hidden="true"></i>
              <span class="d-inline d-lg-none">Philosophy</span>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav class="mb-2 mb-lg-0" right>
            <MDBNavbarItem
              @click="signOutButton"
              v-if="useCredential.isLoggedIn()"
              active
            >
              <i class="fa fa-sign-out-alt me-2" aria-hidden="true"></i>
              <span class="d-inline d-lg-none">ออกจากระบบ</span>
            </MDBNavbarItem>
            <MDBNavbarItem v-else to="/signin">
              <i class="fa fa-user-circle me-2" aria-hidden="true"></i>
              <span class="d-inline d-lg-none">เข้าสู่ระบบ / สมัครสมาชิก</span>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  </header>
  <img
    :src="bgWallpaper"
    v-if="$route.meta.activeBanner"
    class="w-100 main-bg"
    alt="Background Wallpaper"
  />

  <RouterView />
</template>

<style scoped>
.brand-centered {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  left: 0;
  top: auto;
  bottom: auto;
}

.navbar-item {
  margin: 0;
}
.navbar-brand {
  display: flex;
  align-items: center;
}
.fa {
  font-size: 14pt;
  vertical-align: middle;
}
.main-bg {
  height: 380px;
  object-fit: cover;
  object-position: bottom;
  pointer-events: none;
}
</style>
