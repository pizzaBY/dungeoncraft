<template>
  <div class="container mb-5">
    <ul
      class="nav nav-pills mb-5 d-flex justify-content-between"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active bg-donat"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >Привилегии</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link bg-donat"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          >Наборы вещей</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link bg-donat"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          >Стикерпаки</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link bg-donat"
          id="gold-coins-tab"
          data-bs-toggle="pill"
          data-bs-target="#gold-coins"
          role="tab"
          aria-controls="gold-coins"
          aria-selected="false"
          >Gold Coin's</a
        >
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle bg-donat"
          data-bs-toggle="dropdown"
          data-bs-target="#"
          role="button"
          aria-expanded="false"
          >Выбор сервера</a
        >
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" @click="ChangeServer('all')"
              >Показать все...</a
            >
          </li>
          <li v-for="item in this.servers" :key="item.server_id">
            <a class="dropdown-item" @click="ChangeServer(item.server_id)">{{
              item.server_name
            }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="row">
          <template v-for="item in this.products" :key="item.product_id">
            <div
              class="col-sm-2 pb-4"
              v-show="
                activeServer == 'all' || activeServer == item.product_server
              "
              v-if="item.product_type == 1"
            >
              <a href="#" data-toggle="modal" data-target="#modalbuy">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button" v-if="item.product_discount > 0">
                    {{ item.product_discount }}%
                  </div>
                  <img
                    src="../../assets/images/donat/vip.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="">
                    <p class="donat-name" v-html="item.product_name"></p>
                  </div>
                  <div
                    class="col-12 mb-3 d-flex justify-content-center my-auto"
                  >
                    <div
                      class="d-flex justify-content-center align-middle px-3 py-1 text-light btn-price rounded-pill fw-bonus-bold"
                    >
                      <template
                        v-if="
                          item.product_discount > 0 &&
                          item.product_discount < 100
                        "
                      >
                        {{
                          this.CalculateDiscount(
                            item.product_price,
                            item.product_discount
                          )
                        }}
                        <div class="ms-1 old-price">
                          <s> {{ item.product_price }}</s>
                        </div>
                      </template>
                      <template v-else>
                        <div>{{ item.product_price }}</div>
                      </template>

                      <img
                        src="../../assets/images/icons/efir.png"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <div class="row">
          <template v-for="item in this.products" :key="item.product_id">
            <div
              class="col-sm-2 pb-4"
              v-show="
                activeServer == 'all' || activeServer == item.product_server
              "
              v-if="item.product_type == 2"
            >
              <a href="#" data-toggle="modal" data-target="#modalbuy">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button" v-if="item.product_discount > 0">
                    {{ item.product_discount }}%
                  </div>
                  <img
                    src="../../assets/images/donat/vip.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="">
                    <p class="donat-name" v-html="item.product_name"></p>
                  </div>
                  <div
                    class="col-12 mb-3 d-flex justify-content-center my-auto"
                  >
                    <div
                      class="d-flex justify-content-center align-middle px-3 py-1 text-light btn-price rounded-pill fw-bonus-bold"
                    >
                      <template
                        v-if="
                          item.product_discount > 0 &&
                          item.product_discount < 100
                        "
                      >
                        {{
                          this.CalculateDiscount(
                            item.product_price,
                            item.product_discount
                          )
                        }}
                        <div class="ms-1 old-price">
                          <s> {{ item.product_price }}</s>
                        </div>
                      </template>
                      <template v-else>
                        <div>{{ item.product_price }}</div>
                      </template>

                      <img
                        src="../../assets/images/icons/efir.png"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <div class="row">
          <template v-for="item in this.products" :key="item.product_id">
            <div
              class="col-sm-2 pb-4"
              v-show="
                activeServer == 'all' || activeServer == item.product_server
              "
              v-if="item.product_type == 3"
            >
              <a href="#" data-toggle="modal" data-target="#modalbuy">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button" v-if="item.product_discount > 0">
                    {{ item.product_discount }}%
                  </div>
                  <img
                    src="../../assets/images/donat/vip.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="">
                    <p class="donat-name" v-html="item.product_name"></p>
                  </div>
                  <div
                    class="col-12 mb-3 d-flex justify-content-center my-auto"
                  >
                    <div
                      class="d-flex justify-content-center align-middle px-3 py-1 text-light btn-price rounded-pill fw-bonus-bold"
                    >
                      <template
                        v-if="
                          item.product_discount > 0 &&
                          item.product_discount < 100
                        "
                      >
                        {{
                          this.CalculateDiscount(
                            item.product_price,
                            item.product_discount
                          )
                        }}
                        <div class="ms-1 old-price">
                          <s> {{ item.product_price }}</s>
                        </div>
                      </template>
                      <template v-else>
                        <div>{{ item.product_price }}</div>
                      </template>

                      <img
                        src="../../assets/images/icons/efir.png"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="gold-coins"
        role="tabpanel"
        aria-labelledby="gold-coins-tab"
      >
        <div class="row">
          <template v-for="item in this.products" :key="item.product_id">
            <div
              class="col-sm-2 pb-4"
              v-show="
                activeServer == 'all' || activeServer == item.product_server
              "
              v-if="item.product_type == 4"
            >
              <a href="#" data-toggle="modal" data-target="#modalbuy">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button" v-if="item.product_discount > 0">
                    {{ item.product_discount }}%
                  </div>
                  <img
                    src="../../assets/images/donat/vip.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="">
                    <p class="donat-name" v-html="item.product_name"></p>
                  </div>
                  <div
                    class="col-12 mb-3 d-flex justify-content-center my-auto"
                  >
                    <div
                      class="d-flex justify-content-center align-middle px-3 py-1 text-light btn-price rounded-pill fw-bonus-bold"
                    >
                      <template
                        v-if="
                          item.product_discount > 0 &&
                          item.product_discount < 100
                        "
                      >
                        {{
                          this.CalculateDiscount(
                            item.product_price,
                            item.product_discount
                          )
                        }}
                        <div class="ms-1 old-price">
                          <s> {{ item.product_price }}</s>
                        </div>
                      </template>
                      <template v-else>
                        <div>{{ item.product_price }}</div>
                      </template>

                      <img
                        src="../../assets/images/icons/efir.png"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cDonates",
  data() {
    return {
      activeServer: "all",
    };
  },
  methods: {
    ChangeServer(server) {
      // `this` will refer to the component instance
      this.activeServer = server;
    },
  },
  beforeMount() {},
  mounted() {},
  computed: mapState([
    // map this.count to store.state.count
    "products",
    "servers",
  ]),
};
</script>
