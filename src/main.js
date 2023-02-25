import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";

import "mdb-vue-ui-kit/css/mdb.min.css";
import "vue3-lottie/dist/style.css";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);

app.mount("#app");
