import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { VueFire, VueFireAuth } from "vuefire";

import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";

import "mdb-vue-ui-kit/css/mdb.min.css";
import "vue3-lottie/dist/style.css";

import "./assets/main.css";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBigYohQT5esM0kT-Vm9qdvj7f6ioL4Z2Q",
  authDomain: "page-journey.firebaseapp.com",
  projectId: "page-journey",
  storageBucket: "page-journey.appspot.com",
  messagingSenderId: "869822157798",
  appId: "1:869822157798:web:49bdc605bca2d5c56cbc27",
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.mount("#app");
