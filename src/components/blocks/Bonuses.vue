<template>
  <div class="container">
    <div style="padding-left: 68px;" class="d-flex">
      <img width="42px" height="62" src="../../assets/images/stock-icon.png" />
      <h1 class="stocks-h1">АКЦИИ И БОНУСЫ</h1>
    </div>

    <div class="row">
      <div class="col-8">
        <div class="row d-flex align-items-stretch">
          <div class="col-6 d-flex align-items-stretch mb-3">
            <a href="#" class="d-flex align-items-stretch w-100">
              <div class="card-stocks w-100">
                <div
                  class="block-hover justify-content-center"
                >
                  <h1 class="auchover-h1 pt-0">Открыть аукцион</h1>
                  <p class="auc-text">Купите или продайте ваши вещи!</p>
                </div>
                <div class="row g-0 pt-5 pb-5 h-100">
                  <div
                    class="col-md-4 d-flex align-items-center justify-content-center"
                  >
                    <img
                      class=""
                      src="../../assets/images/cubs.png"
                      width="100"
                      height="100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 d-flex flex-column align-self-center">
                    <h2 class="auc-name d-flex align-self-center">Аукцион</h2>
                    <p class="auc-text d-flex align-self-center">
                      Торгуйтесь с другими игроками!
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            class="col-md-3 d-flex col-sm-12 align-self-stretch align-items-stretch mb-3"
            v-for="n in 10"
            :key="n"
          >
            <a
              href="#"
              class="d-flex align-items-stretch w-100"
              data-toggle="modal"
              data-target="#modalbuy"
            >
              <div class="card-stocks w-100 h-100">
                <div class="block-hover">
                  <h1 class="auchover-h5">Купить</h1>
                </div>
                <div class="row g-0 h-100">
                  <div
                    class="col-12 d-flex flex-column align-items-stretch align-content-stretch h-100"
                  >
                    <div class="col-12 d-flex align-content-center">
                      <div class="position-relative">
                        <div
                          class="position-absolute top-0 start-0 translate-bonus"
                        >
                          <span
                            class="badge rounded-pill bg-danger discount-color fs-6"
                            >45%</span
                          >
                        </div>
                      </div>
                      <img
                        src="../../assets/images/donat/vip.png"
                        class="card-img-top donat-img"
                        alt="..."
                      />
                    </div>

                    <div class="col-12 d-flex">
                      <p class="donat-name">
                        Привилегия<br />"VIP" <br v-if="n % 2" />
                        {{ n }}
                      </p>
                    </div>

                    <div
                      class="col-12 mb-3 d-flex justify-content-center my-auto"
                    >
                      <div class="d-flex justify-content-center align-middle px-2 py-1 text-light btn-price rounded-pill fw-bold">
                        115<img
                          src="../../assets/images/icons/efir.png"
                          width="24"
                          height="24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12">
            <a href="#" data-toggle="modal" data-target="#modalbuy">
              <div class="card-stocks mb-4">
                <div class="row g-0 pt-1 pb-3">
                  <div class="position-relative">
                        <div
                          class="position-absolute top-0 start-0 translate-bonus"
                        >
                          <span
                            class="badge rounded-pill bg-danger discount-color fs-6"
                            >45%</span
                          >
                        </div>
                      </div>
                  <div class="col-5 d-flex justify-content-center p-3 my-auto">
                    
                    <img
                      src="../../assets/images/box/gold-box.png"
                      width="130"
                      height="94"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div class="col-7 align-items-center">
                    <div class="d-flex flex-column h-100">
                      <div class="d-flex flex-column justify-content-center align-middle h-100"><h5 class="auc-name">1500<br />Gold Coin's</h5></div>
                      
                      <div class="col-5 d-flex justify-content-center align-middle px-2 py-1 text-light btn-price rounded-pill fw-bold">
                        45<img
                          src="../../assets/images/icons/efir.png"
                          width="24"
                          height="24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12">
            <a href="#" data-toggle="modal" data-target="#modalpromo">
              <div class="card-stocks mb-4">
                <div class="row g-0 pt-3 pb-3">
                  <div class="col-md-4 d-flex justify-content-center p-3 my-auto">
                    <img
                      
                      src="../../assets/images/icons/key.png"
                      width="90"
                      height="90"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 justify-content-center">
                    <div class="col-12 d-flex flex-column my-auto h-100 justify-content-center">
                      <h5 class="auc-name m-0">Активировать Промокод!</h5>
                      <p class="auc-text m-0">Подарочные коды.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12">
            <a href="https://vk.com/dungeon.craft" target="_blank">
              <div class="card-stocks mb-3">
                <div class="row g-0 pt-3 pb-3">
                  <div class="col-md-4 d-flex justify-content-center p-3 my-auto">
                    <img
                      class="img-fluid"
                      src="../../assets/images/icons/settings.png"
                      width="80"
                      height="80"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 justify-content-center">
                    <div class="col-12 d-flex flex-column my-auto h-100 justify-content-center">
                      <h5 class="auc-name m-0">Нужна помощь?</h5>
                      <p class="auc-text m-0">НАПИШИ!</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div style="padding-left: 68px; padding-top: 50px;" class="d-flex">
      <img
        width="42px"
        height="62"
        src="../../assets/images/stock-icon.png"
        alt=""
        class=""
      />
      <h1 class="stocks-h1">ДОНАТ И УСЛУГИ</h1>
    </div>
  </div>
</template>

<style>
.translate-bonus {
  transform: translate(25%, 50%) !important;
}
.discount-color {
  background-color: #f44336 !important;
}
</style>
