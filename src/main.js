import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import moment from 'moment';

const app = createApp(App)
var axiosInstance = axios.create({
    baseURL: 'http://localhost:5050',
    withCredentials: false
    /* other custom settings */
  });

moment.locale("ru")
app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$moment = moment;

app.use(router)
app.mount('#app')
