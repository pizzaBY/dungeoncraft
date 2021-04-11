<template>
  <div class="container mb-5">
    <ul class="nav nav-pills mb-5" id="pills-tab" role="tablist">
      <li class="nav-item betw-donat" role="presentation">
        <a
          class="nav-link active btn bg-donat"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >Привилегии</a
        >
      </li>
      <li class="nav-item betw-donat" role="presentation">
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
      <li class="nav-item betw-donat" role="presentation">
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
      <li class="nav-item betw-donat" role="presentation">
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
      <li class="nav-item dropdown betw-donat">
        <a
          class="nav-link dropdown-toggle bg-donat"
          data-bs-toggle="dropdown"
          data-bs-target="#"
          role="button"
          aria-expanded="false"
          >Выбор сервера</a
        >
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="ChangeServer('all')">Показать все...</a></li>
          <li><a class="dropdown-item" @click="ChangeServer('classic')">Classic</a></li>
          <li><a class="dropdown-item" @click="ChangeServer('magicrpg')">Magic and RPG</a></li>
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
          <div class="col-sm-4">
            <div class="d-flex">
              <a href="#" data-bs-toggle="modal" data-bs-target="#modalbuy" v-show="activeServer == 'all' || activeServer == 'classic'">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button">15%</div>
                  <img
                    src="../../assets/images/donat/vip.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="price-button2">
                    50<img
                      src="../../assets/images/icons/ruble.png"
                      width="14"
                      height="14"
                    />
                  </div>
                  <div class="">
                    <p class="donat-name">"Вип"</p>
                  </div>
                </div>
              </a>
              <a href="#" data-bs-toggle="modal" data-bs-target="#modalbuy" v-show="activeServer == 'all' || activeServer == 'magicrpg'">
                <div class="card-stocks stocks-b3">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button">15%</div>
                  <img
                    src="../../assets/images/donat/premium.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="price-button2">
                    110<img
                      src="../../assets/images/icons/ruble.png"
                      width="14"
                      height="14"
                    />
                  </div>
                  <div class="">
                    <p class="donat-name">"Премиум"</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="d-flex">
              <a href="#" data-bs-toggle="modal" data-bs-target="#modalbuy" v-show="activeServer == 'all' || activeServer == 'classic'">
                <div class="card-stocks stocks-b2">
                  <div class="block-hover">
                    <h1 class="auchover-h5">Купить</h1>
                  </div>
                  <div class="discount-button">34%</div>
                  <img
                    src="../../assets/images/donat/magic.png"
                    class="card-img-top donat-img"
                    alt="..."
                  />
                  <div class="price-button">
                    249<img
                      src="../../assets/images/icons/ruble.png"
                      width="14"
                      height="14"
                    />
                  </div>
                  <div class="">
                    <p class="donat-name">"Волшебник"</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        2
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        3
      </div>
      <div
        class="tab-pane fade"
        id="gold-coins"
        role="tabpanel"
        aria-labelledby="gold-coins-tab"
      >
        4
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "cDonates",
    data() {
        return {
            activeServer: "all"
        };
    },
    methods: {
        ChangeServer(server) {
        // `this` will refer to the component instance
            this.activeServer = server
        }
    }
}
</script>