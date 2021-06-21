import { createStore } from "vuex";
import axios from "axios";
import moment from "moment";
import router from "@/router"
moment.locale("ru");

var AXIOS = axios.create({
  //baseURL: "http://beta.dungeoncraft.ru/api",
  baseURL: "http://localhost:5100/api",
  withCredentials: true,
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
    servers: [],
    stats: [],
    voters: [],
    news: [],
    user: [],
    topstats: [],
    factions: [],
    payment: [],
    products: [],
    isAuth: false,
    currentproduct: [],
    token: localStorage.getItem("token") || "",
    error: "",
  },
  mutations: {
    setCurrentProduct(state, data) {
      state.currentproduct = data;
    },
    setVoters(state, data) {
      state.voters = data;
    },
    setTops(state, data) {
      state.topstats = data
    },
    setStats(state, data) {
      state.stats = data;
    },
    setFactions(state, data) {
      state.factions = data;
    },
    setMonitoring(state, data) {
      state.servers = data;
    },
    setNews(state, data) {
      state.news = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
    setPayment(state, data) {
      state.payment = data;
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
        context.commit("setMonitoring", data.data.data.servers);
        context.commit("setStats", data.data.data.stats);
        
      }
    },
    async getVoters(context) {
      let data = await AXIOS.get("/votes/getLast");
      if (data.data.status_code == 200) {
        context.commit("setVoters", data.data.data);
      }
    },
    async getTopStats(context) {
      let data = await AXIOS.get("/votes/getStats");
      if (data.data.status_code == 200) {
        context.commit("setTops", data.data.data);
      }
    },
    async getNews(context) {
      let data = await AXIOS.get("/news/getAll");
      if (data.data.status_code == 200) {
        context.commit("setNews", data.data.data);
      }
    },
    async getProducts(context) {
      let data = await AXIOS.get("/products/getAll");
      if (data.data.status_code == 200) {
        context.commit("setProducts", data.data.data);
      }
    },
    async getLogout(context) {
      context.commit("setToken", "");
      context.commit("setUser", "");
      localStorage.removeItem("token");
      router.go("/")
    },
    async getPaymentURL(context, details) {
      console.log(details)
      let data = await AXIOS.post("/payment/pay", details);
      if (data != undefined) {
        //console.log(data.data)
        window.location.href = data.data.data
        
      } else {
        context.commit("setPayment", "error");
      }
    },
    async setAvatar(context, details) {
      //console.log(details)
      let data = await AXIOS.post("/users/setAvatar", details,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(data)
    },
    async getProductDetail(context, details) {
      try {
        let data = await AXIOS.get("/products/id/"+details);
        if (data.data.status_code == 200) {
          context.commit("setCurrentProduct", data.data.data);
        }
        console.log(data)
      } catch (error) {
        alert("Проблема при получении данных продукта")
      }
    },
    async getLogin(context, details) {
      try {
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
            mydata = await AXIOS.get("/users/myFactions");
          if (mydata != undefined) {
            if (mydata.data.status_code == 200) {
              //console.log(mydata.data.data);
              context.commit("setFactions", mydata.data.data);
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
      } catch (error) {
        console.log("БЭКЭНД УПАЛ")
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
        mydata = await AXIOS.get("/users/myFactions");
        if (mydata != undefined) {
          if (mydata.data.status_code == 200) {
            //console.log(mydata.data.data);
            context.commit("setFactions", mydata.data.data);
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
