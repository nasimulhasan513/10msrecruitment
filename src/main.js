import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VeeValidate from "./plugins/validation";
import ProgressBar from "./plugins/progress-bar";

ProgressBar(router);

import "./assets/tailwind.css";
import "animate.css";
import "nprogress/nprogress.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VeeValidate)
  .mount("#app");
