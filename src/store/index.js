import { createStore } from "vuex";
import axios from "axios";
import moment from "moment";
import router from "@/router"
moment.locale("ru");

var AXIOS = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
  /* other custom settings */
});

AXIOS.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (401 === error.response.status) {
      // handle error: inform user, go to login, etc
      console.log("LOGOUT !!!!");
      store.dispatch("getLogout");
      router.go("/")
    } else {
      return Promise.reject(error);
    }
  }
);

const store = createStore({
  state: {
    version: "1.0.0a",
    servers: [],
    voters: [],
    news: [],
    user: [],
    isAuth: false,
    token: localStorage.getItem("token") || "",
    error: "",
  },
  mutations: {
    setVoters(state, data) {
      state.voters = data;
    },
    setMonitoring(state, data) {
      state.servers = data;
    },
    setNews(state, data) {
      state.news = data;
    },
    setUser(state, data) {
      state.user = data;
      state.isAuth = true;
    },
    setToken(state, data) {
      state.token = data;
    },
    setUserErr(state, data) {
      state.error = data;
    },
  },
  actions: {
    async getMonitoring(context) {
      let data = await AXIOS.get("/servers/getAll");
      if (data.data.status_code == 200) {
        context.commit("setMonitoring", data.data.data);
      }
    },
    async getVoters(context) {
      let data = await AXIOS.get("/votes/getLast");
      if (data.data.status_code == 200) {
        context.commit("setVoters", data.data.data);
      }
    },
    async getNews(context) {
      let data = await AXIOS.get("/news/getAll");
      if (data.data.status_code == 200) {
        context.commit("setNews", data.data.data);
      }
    },
    async getLogout(context) {
      context.commit("setToken", "");
      localStorage.removeItem("token");
    },
    async getLogin(context, details) {
      let data = await AXIOS.post("/auth/login", details);
      if (data != undefined) {
        if (data.data.status_code == 200) {
          context.commit("setUserErr", "ok");

          let token = data.data.data;

          AXIOS.defaults.headers.common["Authorization"] = "Bearer " + token;
          localStorage.setItem("token", token);
          context.commit("setToken", token);

          let mydata = await AXIOS.get("/auth/myUser");

          if (mydata != undefined) {
            if (mydata.data.status_code == 200) {
              console.log(mydata.data.data);
              context.commit("setUser", mydata.data.data);
            }
          }
        } else if (data.data.status_code == 401) {
          context.commit("setUserErr", "badcredentials");
        } else {
          context.commit("setUserErr", "unknown");
        }
      } else {
        context.commit("setUserErr", "unknown");
      }
    },
    async checkLogin(context) {
      AXIOS.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      //console.log("TOKEN DEBUG ---- " + context.state.token);
      if (context.state.token != "") {
        let mydata = await AXIOS.get("/auth/myUser");

        if (mydata != undefined) {
          if (mydata.data.status_code == 200) {
            //console.log(mydata.data.data);
            context.commit("setUser", mydata.data.data);
          }
        }
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    getGroup(state) {
      let group = state.user.user_group;
      if (group == "dev") {
        return "Разработчик";
      } else if (group == "admin") {
        return "Администратор";
      } else {
        return "Пользователь";
      }
    },
    getStatus(state) {
      let status = state.user.user_status;
      if (status == 0) {
        return "Не проверен";
      } else if (status == 2) {
        return "Забанен";
      } else {
        return "Активен";
      }
    },
    getStatusClass(state) {
      let status = state.user.user_status;
      if (status == 0) {
        return "text-warning";
      } else if (status == 2) {
        return "text-danger";
      } else {
        return "text-success";
      }
    },
  },
  modules: {},
});
export default store;
