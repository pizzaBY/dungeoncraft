<template>
  <!-- Сервер -->
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="card-block">
          <div class="">
            <a href="/">
              <img
                style="border-radius: 10px;"
                src="../assets/images/background/banner.png"
                height="115"
                class="card-img-top"
              />
            </a>
          </div>
        </div>
        <div class="card-block">
          <div class="mb-3">
            <div class="row g-0">
              <div class="col-md-6 p-3">
                <!--<img
                  src="../assets/images/background/items/premium.png"
                  style="border-radius: 10px;"
                />-->
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="text-sidebar">{{ currentproduct.product_name }}</h3>
                  <div class="line-sidebar"></div>
                  <p style="padding-top: 0px;" class="subtext-news">
                    {{ currentproduct.product_desc }}
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-center bd-highlight">
                <div class="p-2 flex-shrink-1 bd-highlight">
                  <div class="pt-2 pr-4 form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      aria-label="..."
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Я ознакомился с
                      <a href="rules.html" target="_blank">правилами</a> и
                      <a href="offer.html" target="_blank">офертой</a>
                    </label>
                  </div>
                </div>
                <div class="p-2 ml-5 bd-highlight">
                  <h3 style="margin-top: 5px;" class="text-sidebar">
                    199
                          <s class="ms-1 old-price">200</s>
                        <img
                      src="../assets/images/icons/efir.png"
                      width="24"
                      height="24"
                      style="margin-bottom: 5px;"
                    />
                  </h3>
                </div>
                <div class="p-2 bd-highlight">
                  <a
                    style="background-color: #66da72;"
                    type="submit"
                    class="btn btn-warning btn-lg button-vote"
                    >Приобрести</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-block p-3">
          <img src="../assets/images/payment/paymeny.png" class="card-img-top" />
        </div>
      </div>
      <!-- Сервер -->

      <div class="col-4">
        <!-- Сайдбар -->
        <cProfile/>
        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Функции и команды:</h3>
            <div class="line-sidebar"></div>
            <p class="subtext-news">
              * Загрузка плащей;<br />
              * После смерти ваш накопленный опыт не пропадает;<br />
              * Получать наборы всех привелегий;<br />
              * Разрешено использование механических поршней;<br />
              * Добавляет три новых набора стикеров: "Ничоси", "Паппи", "Зак".
            </p>
          </div>
        </div>
        <!-- Сайдбар -->
      </div>
    </div>
  </div>
</template>

<script>
import cProfile from "@/components/UserProfile.vue";
import { mapState, mapActions } from "vuex";

export default {
  name:"cProduct",
  components:{
    cProfile
  },
  methods: {
    ...mapActions([
      "getProductDetail",
    ]),
  },
  beforeMount() {
    this.getProductDetail(this.$route.params.orderId)
  },
  computed: mapState([
    "currentproduct",
  ]),
}
</script>