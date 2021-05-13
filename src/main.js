import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import moment from "moment";

const app = createApp(App)
  .use(store)
  .use(router);

moment.locale("ru");


app.config.globalProperties.$moment = moment;

app.mount("#app");
