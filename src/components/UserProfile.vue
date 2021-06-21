<template>
  <!-- Авторизация -->
  <div class="card-block" v-if="this.user.length == 0">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Авторизация</h3>
      <div class="line-sidebar"></div>
      <div class="d-flex justify-content-center bd-highlight">
        <div class="p-2 bd-highlight">
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalauthorization"
            class="btn btn-warning btn-lg button-auto"
            >Авторизация</a
          >
        </div>
        <div class="p-2 flex-shrink-1 bd-highlight">
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalclosed"
            class="btn btn-warning btn-lg button-lock"
            ><i class="bi-shield-lock"></i
          ></a>
        </div>
      </div>

      <div class="d-flex justify-content-center bd-highlight">
        <div class="bd-highlight">
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalregister"
            class="btn btn-warning btn-lg button-reg"
            >Регистрация</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Авторизация -->
  <!-- Авторизация (АВТОРИЗИРОВАН)-->
  <div class="card-block" v-else>
    <div class="row g-0">
      <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
        <div class="">
          <img
            src="../assets/images/icons/profile.png"
            width="100"
            height="100"
            class="rounded-circle"
            v-if="this.user.user_avatar == false"
          />
          <img
            :src="'/uploads/avatars/' + this.user.user_name + '.png'"
            width="100"
            height="100"
            class="rounded-circle"
            v-else
          />
          <div class="position-relative">
            <div class="position-absolute bottom-0 end-0">
              <div class="icon-dev"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="name-server">
            {{ this.user.user_firstname }} {{ this.user.user_lastname }}
            <span class="badge bg-success">Online</span>
          </h5>
          <p class="sub-server">
            {{ this.getGroup }}
          </p>
          <div class="d-flex justify-content-between">
            <div class="name-server">
              {{ this.user.user_coin }}
              <img
                src="../assets/images/icons/coin.png"
                width="24"
                height="24"
                title="Количество ваших Койнов"
              />
            </div>
            <div class="name-server">
              {{ this.user.user_efir }}
              <img
                src="../assets/images/icons/efir.png"
                width="24"
                height="24"
                title="Количество ваших Эфиров"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center bd-highlight px-2">
        <div class="p-2 p-md-2 bd-highlight flex-fill">
          <router-link
            :to="{ name: 'rCabinet' }"
            class="btn btn-warning btn-lg button-auto w-100"
            >Личный кабинет</router-link
          >
        </div>
        <div class="p-1 p-md-2 flex-shrink-1 bd-highlight">
          <div class="">
            <div class="icon-sms"></div>
            <a type="button" class="btn btn-warning btn-lg button-lock"
              ><i class="bi bi-envelope"></i
            ></a>
          </div>
        </div>
        <div class="p-1 p-md-2 flex-shrink-1 bd-highlight">
          <a
            type="button"
            data-toggle="modal"
            data-target="#modalgoout"
            @click="this.getLogout()"
            class="btn btn-warning btn-lg button-lock"
            ><i class="bi bi-door-open-fill"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Авторизация (АВТОРИЗИРОВАН)-->
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "cUserRight",
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getLogout", // проксирует `this.increment()` в `this.$store.dispatch('increment')`
    ]),
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "user",
    ]),
    ...mapGetters(["getGroup"]),
  },
};
</script>
