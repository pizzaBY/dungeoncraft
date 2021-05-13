<template>
  <!-- Личный кабинет -->
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="card-block">
          <div class="row g-0">
            <div
              class="pt-3 col-md-4 d-flex justify-content-center align-middle"
            >
              <img
                src="../assets/images/icons/profile.png"
                width="100"
                height="100"
              />
              <div class="icon-dev"></div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="name-server">
                  {{ this.user.user_firstname }} {{ this.user.user_lastname }}
                  <span class="badge bg-success">Online</span>
                </h5>
                <p class="sub-server">{{ this.getGroup }}</p>
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

                  <div class="name-server pe-5">
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
            <div class="d-flex justify-content-center bd-highlight">
              <div class="p-2 bd-highlight">
                <a
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalclosed"
                  class="btn btn-warning btn-lg button-auto"
                  >Проверить сообщения</a
                >
              </div>
              <div class="p-2 flex-shrink-1 bd-highlight">
                <a type="button" class="btn btn-warning btn-lg button-lock"
                  ><i class="bi bi-gear"></i
                ></a>
              </div>
              <div class="p-2 flex-shrink-1 bd-highlight">
                <a
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalgoout"
                  class="btn btn-warning btn-lg button-lock"
                  ><i class="bi bi-door-open-fill"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="row g-0">
            <div
              class="pt-3 col-md-4 d-flex justify-content-center align-middle"
            >
              <img
                src="https://dungeoncraft.ru/uploads/skin.php?type=head&name=eltazaris&1616711932776"
                width="64"
                height="64"
                style="border-radius: 10px;"
              />
              <div class="icon-star"></div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="name-server">
                  {{ this.user.user_name }}
                  <span class="badge bg-danger">Developer</span>
                </h5>
                <p class="sub-server">Сейчас в игре: <b>----</b></p>
                <a
                  id="pills-settings-tab"
                data-bs-toggle="pill"
                href="#pills-settings"
                role="tab"
                aria-controls="pills-settings"
                aria-selected="false"
                  type="button"
                  class="btn btn-warning btn-lg button-vote"
                  >История
                  <img
                    src="../assets/images/icons/shopping.png"
                    width="24"
                    height="24"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="pt-3 d-flex justify-content-center">
            <h3 class="font-weight9">Ваш персонаж:</h3>
          </div>
          <div class="pb-4 d-flex justify-content-center">
            <img
              src="../assets/images/cabinet/skin1.png"
              width="112"
              height="224"
              alt=""
              class="skin-background"
            />
            <img
              src="../assets/images/cabinet/skin2.png"
              width="112"
              height="224"
              alt=""
              class="skin-background ml-3"
            />
          </div>
          <div class="d-flex justify-content-center">
            <a
              href="#"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalskin"
              class="btn btn-warning btn-lg button-cabinet"
              >Изменить скин</a
            >
          </div>
          <div class="pb-2 d-flex justify-content-center">
            <a
              href="#"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalcloack"
              class="btn btn-warning btn-lg button-cabinet"
              >Изменить плащ</a
            >
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card-block">
          <ul class="nav nav-pills p-3" id="pills-tab" role="tablist">
            <li class="nav-item flex-fill px-3" role="presentation">
              <a
                class="nav-link button-rblock rounded-pill active"
                id="pills-info-tab"
                data-bs-toggle="pill"
                href="#pills-info"
                role="tab"
                aria-controls="pills-info"
                aria-selected="true"
                >Информация</a
              >
            </li>
            <li class="nav-item flex-fill px-3" role="presentation">
              <a
                class="nav-link button-rblock rounded-pill"
                id="pills-eco-tab"
                data-bs-toggle="pill"
                href="#pills-eco"
                role="tab"
                aria-controls="pills-eco"
                aria-selected="false"
                >Экономика</a
              >
            </li>
            <li class="nav-item flex-fill px-3" role="presentation">
              <a
                class="nav-link button-rblock rounded-pill"
                id="pills-guild-tab"
                data-bs-toggle="pill"
                href="#pills-guild"
                role="tab"
                aria-controls="pills-guild"
                aria-selected="false"
                >Гильдия</a
              >
            </li>
            <li class="nav-item flex-fill px-3" role="presentation">
              <a
                class="nav-link button-rblock rounded-pill"
                id="pills-settings-tab"
                data-bs-toggle="pill"
                href="#pills-settings"
                role="tab"
                aria-controls="pills-settings"
                aria-selected="false"
                >Настройки</a
              >
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-info"
              role="tabpanel"
              aria-labelledby="pills-info-tab"
            >
              <div class="d-flex p-3">
                <div class="" style="width: 20rem;">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="card-title">15 уровень:</h6>
                      <h6 class="card-title">
                        5 из 30 exp
                      </h6>
                    </div>
                    <div class="progress" style="height: 6px;">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 25%;"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <br />
                    <div class="d-flex justify-content-between">
                      <h6 class="card-title">Нарушения:</h6>
                      <h6 class="card-title">
                        {{ this.user.user_bans}} из 10
                      </h6>
                    </div>
                    <div class="progress" style="height: 6px;">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        :style="'width:'+(this.user.user_bans/10)*100+'%'"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <br />
                    <h6 class="card-title">
                      Игровой ник: <b>{{ this.user.user_name }}</b>
                    </h6>
                    <h6 class="card-title">
                      Статус аккаунта: <b :class="getStatusClass">{{ this.getStatus }}</b>
                    </h6>
                    <h6 class="card-title">
                      Ваша почта: <b>{{ this.user.user_email }}</b>
                    </h6>
                    <h6 class="card-title">
                      Гильдия: <a href="#">BloodKnight</a>
                    </h6>
                  </div>
                </div>
                <div
                  class=""
                  style="width: 20rem; margin-left: 1rem!important;"
                >
                  <div class="card-body">
                    <h6 class="card-title">Пол персонажа: <b>Мужской</b></h6>
                    <h6 class="card-title">
                      Дата регистрации: <b>{{ formatDate(this.user.user_reg)}}</b>
                    </h6>
                    <h6 class="card-title">
                      Последний онлайн: <b>{{ formatDate(this.user.user_online)}}</b>
                    </h6>
                    <h6 class="card-title">
                      Часов в игре: <b>{{ humanizeDate(this.user.user_playedall )}}</b>
                    </h6>
                    <h6 class="card-title">
                      Часов за месяц: <b>{{ humanizeDate(this.user.user_playedmonth )}}</b>
                    </h6>
                    <h6 class="card-title">
                      Привел игроков:
                      <a
                        href="#"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalinvite"
                        >Проверить</a
                      >
                    </h6>
                  </div>
                </div>
              </div>
              <div class="mb-1 p-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="" style="max-width: auto">
                      <h4 class="ftext-dc">Изменение цвета ника!</h4>
                      <p class="fsub-text">
                        Измените цвет вашего ника всего за <b>49 рублей.</b>
                      </p>
                      <div class="card-body">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <img
                            src="../assets/images/icons/colors/1.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/2.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/3.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <img
                            src="../assets/images/icons/colors/4.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/5.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/6.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <img
                            src="../assets/images/icons/colors/7.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/8.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <hr />
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/9.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <img
                            src="../assets/images/icons/colors/10.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/11.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/12.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/13.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/14.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/15.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option2"
                          />
                          <img
                            src="../assets/images/icons/colors/16.png"
                            width="40"
                            height="40"
                            class=""
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 p-3">
                    <h6>
                      Изменение цвета ника или префикса позволит вам выделиться
                      из толпы!
                    </h6>
                  </div>

                  <div class="col-md-4 p-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        Изменить цвет ника
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        Изменить префикс
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4 p-3">
                    <a
                      href="#"
                      type="button"
                      class="btn btn-warning btn-lg button-vote"
                      >Оплатить</a
                    >
                  </div>
                </div>
              </div>
              <h4 class="ftext-dc">Реферальная система!</h4>
              <p class="fsub-text">
                Приглашайте друзей и получайте <b>10%</b
                ><img
                  src="../assets/images/icons/efir.png"
                  width="24"
                  height="24"
                  title="Количество ваших Эфиров"
                />
                от их пополнений.
              </p>
              <div class="mb-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="input-group justify-content-center">
                        <input
                          style="width: 450px;"
                          type="text"
                          class="form-input"
                          id="formGroupExampleInput"
                          placeholder="https://dungeoncraft.ru/?page=register#eltazaris"
                        />
                        <a href="#" class="btn btn-warning button-news"
                          >Копировать</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade p-3"
              id="pills-eco"
              role="tabpanel"
              aria-labelledby="pills-eco-tab"
            >
              <div class="alert alert-eco" role="alert">
                В случае возникновения проблем c оплатой, обратитесь на -
                <a href="#">support@dungeoncraft.com</a>
              </div>
              <h4 class="ftext-dc">Пополнение баланса!</h4>
              <p class="fsub-text">
                При полонении <b>1</b> российский рубль = <b>1 Эфиру</b>
              </p>
              <div class="card-eco mb-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-4 p-4">
                    <img
                      src="../assets/images/icons/pay.png"
                      width="200"
                      height="115"
                    />
                    <h6>
                      <b
                        >Укажите сумму в рублях, которую хотите зачислить на
                        счет</b
                      >
                    </h6>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <form class="pt-3">
                        <div
                          class="form-outline mb-3 d-flex justify-content-center"
                        >
                          <input
                            type="text"
                            class="form-input"
                            id="formGroupExampleInput"
                            placeholder="введите сумму"
                          />
                        </div>
                        <div
                          class="form-outline mb-3 d-flex justify-content-center"
                        >
                          <input
                            type="text"
                            class="form-input"
                            id="formGroupExampleInput"
                            placeholder="введите промо-код"
                          />
                        </div>
                        <div class="d-flex justify-content-center bd-highlight">
                          <div class="p-2 bd-highlight">
                            <a
                              type="button"
                              class="btn btn-warning btn-lg button-vote"
                              >Пополнить</a
                            >
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="ftext-dc">Перевод между игроками!</h4>
              <p class="fsub-text">
                При переводе между игроками комиссия <b>3%</b>
              </p>
              <div class="card-eco mb-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-4 p-4">
                    <img
                      src="../assets/images/icons/pay-add.png"
                      width="200"
                      height="115"
                    />
                    <h6>
                      <b
                        >Укажите ник игрока и сумму, которую хотите перевести
                        ему на счет</b
                      >
                    </h6>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <form class="pt-3">
                        <div
                          class="form-outline mb-3 d-flex justify-content-center"
                        >
                          <input
                            type="text"
                            class="form-input"
                            id="formGroupExampleInput"
                            placeholder="введите сумму"
                          />
                        </div>
                        <div
                          class="form-outline mb-3 d-flex justify-content-center"
                        >
                          <input
                            type="text"
                            class="form-input"
                            id="formGroupExampleInput"
                            placeholder="введите имя игрока"
                          />
                        </div>
                        <div class="d-flex justify-content-center bd-highlight">
                          <div class="p-2 bd-highlight">
                            <a
                              type="button"
                              class="btn btn-warning btn-lg button-vote"
                              >Перевести</a
                            >
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="ftext-dc">Обмен Эфиров в Золотые Койны!</h4>
              <p class="fsub-text">
                При обмене: <b>1 Эфир = 10 Gold Coin's</b>
              </p>
              <div class="card-eco mb-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-4 p-4">
                    <img
                      src="../assets/images/icons/pay-trade.png"
                      width="200"
                      height="115"
                    />
                    <h6>
                      <b
                        >Укажите сумму эфиров, которую хотите обменять в
                        койны</b
                      >
                    </h6>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <form class="pt-3">
                        <div
                          class="form-outline mb-3 d-flex justify-content-center"
                        >
                          <input
                            type="text"
                            class="form-input"
                            id="formGroupExampleInput"
                            placeholder="введите сумму"
                          />
                        </div>
                        <h5 style="text-align: center;" class="name-server">
                          Вы получите: 100 Gold Coins
                        </h5>
                        <div class="d-flex justify-content-center bd-highlight">
                          <div class="p-2 bd-highlight">
                            <a
                              type="button"
                              class="btn btn-warning btn-lg button-vote"
                              >Обменять</a
                            >
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane p-3 fade"
              id="pills-guild"
              role="tabpanel"
              aria-labelledby="pills-guild-tab"
            >
              <div class="mb-3" style="max-width: auto;">
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="name-server">Гильдии</h5>
                      <p class="card-text">
                        Гильдия представляет собой объединение игроков с общими
                        интересами, предназначенное для совместного выполнения
                        трудовых и боевых задач, приятного времяпровождения.
                        Только гильдии могут владеть кланхоллами, вести
                        дипломатические переговоры и объявить войну, участвовать
                        в гильдийских турнирах и рейтинговых.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://dungeoncraft.ru/design/img/logoclan.png"
                      class
                    />
                    <div class="d-flex justify-content-center">
                      <a
                        href="#"
                        type="button"
                        class="btn btn-warning btn-lg button-cabinet"
                        >Создать гильдию</a
                      >
                    </div>
                    <div class="d-flex justify-content-center">
                      <a
                        href="guilds.html"
                        target="_blank"
                        type="button"
                        class="btn btn-warning btn-lg button-cabinet"
                        >Список гильдий</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade p-3"
              id="pills-settings"
              role="tabpanel"
              aria-labelledby="pills-settings-tab"
            >
              <div class="row">
                <div class="col-2">
                  <div
                    class="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link button-settings active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                      style="width: 115px; height: 115px;"
                    >
                      <div class="settings-icon1"></div>
                      <p style="margin-left: 5px;">Обличие</p>
                    </a>
                    <a
                      class="mt-3 nav-link button-settings"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                      style="width: 115px; height: 115px;"
                    >
                      <div class="settings-icon2"></div>
                      <p style="margin-left: 8px;">Данные</p>
                    </a>
                    <a
                      class="mt-3 nav-link button-settings"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                      style="width: 115px; height: 115px;"
                    >
                      <div class="settings-icon3"></div>
                      <p style="margin-left: 10px;">Защита</p>
                    </a>
                    <a
                      class="mt-3 nav-link button-settings"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      style="width: 115px; height: 115px;"
                    >
                      <div class="settings-icon4"></div>
                      <p style="margin-left: 7px;">Помощь</p>
                    </a>
                  </div>
                </div>
                <div class="col-10">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <p class="name-server">Выберите обличие:</p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="skin-background">
                            <img
                              src="../assets/images/cabinet/boy.png"
                              width="330"
                              height="280"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Обличие 1</h5>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Выбрать
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="skin-background">
                            <img
                              src="../assets/images/cabinet/girl.png"
                              width="330"
                              height="280"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Обличие 2</h5>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Выбрать
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 pt-3">
                          <div class="skin-background">
                            <img
                              src="../assets/images/cabinet/boy1.png"
                              width="330"
                              height="280"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Обличие 3</h5>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Выбрать
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 pt-3">
                          <div class="skin-background">
                            <img
                              src="../assets/images/cabinet/girl2.png"
                              width="330"
                              height="280"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Обличие 4</h5>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Выбрать
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex pt-3">
                          <h3
                            style="margin-top: 6px; margin-right: 20px;"
                            class="name-server"
                          >
                            Подтвердите выбор:
                          </h3>
                          <a
                            href="#"
                            type="button"
                            class="btn btn-warning btn-lg button-skin"
                            >Изменить</a
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <img
                        src="../assets/images/background/img2.jpg"
                        style="border-radius: 5px;"
                        class="card-img-top"
                      />
                      <h3 class="name-server pt-3">Ваши данные и контакты:</h3>
                      <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label"
                          >Email:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="staticEmail"
                            value="email@example.com"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Ваше имя"
                            aria-label="First name"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Ваша фамилия"
                            aria-label="Last name"
                          />
                        </div>
                      </div>
                      <div class="col pt-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                          >Расскажите о себе</label
                        >
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <h3 class="name-server">Защитите ваш аккаунт:</h3>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <h3 class="name-server">Техническая поддержка:</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Личный кабинет -->
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "cCabinet",
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "user",
    ]),
    ...mapGetters(["getGroup", "getStatus", "getStatusClass"]),
  },
  methods: {
    formatDate(text) {
      text = this.$moment(text * 1000).format("DD.MM.YYYY");
      return text;
    },
    humanizeDate(text) {
        text = this.$moment.utc(this.$moment.duration(text, "minutes").asMilliseconds()).format("HH ч mm м")
      //text = this.$moment.duration("-65", "minutes").humanize({d: 7, w: 4});
      return text;
    },
  },
};
</script>
