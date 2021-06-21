import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import moment from "moment";





const app = createApp(App)
  .use(store)
  .use(router);

  app.mixin({
    methods: {
      CalculateDiscount(price, discount) {
        return Math.round(price - ((discount/100) * price))
      },
      FrontVersion() {
        return "1.1"
      }
    }
  })

app.config.globalProperties.$moment = moment;
// define a mixin object


moment.locale("ru");

app.mount("#app");
