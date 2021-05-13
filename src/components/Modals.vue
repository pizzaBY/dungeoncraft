<template>
  <!-- Модальное окно авторизации -->
  <div
    class="modal fade"
    id="modalauthorization"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref="mybot"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div class="card-sign">
            <div class="card-body">
              <div class="modal-logo p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                АВТОРИЗАЦИЯ
              </h1>
              <p class="fsub-text">
                Войдите в аккаунт, что бы скорее начать игру!
              </p>
              <form>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <input
                    style="width: 320px;"
                    type="text"
                    maxlength="12"
                    class="form-input"
                    placeholder="Введите ваш логин"
                    v-model="d_name"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <input
                    style="width: 320px;"
                    type="password"
                    maxlength="25"
                    size="40"
                    name="password"
                    class="form-input"
                    placeholder="Введите ваш пароль"
                    v-model="d_pass"
                  />
                </div>

                <div class="d-flex justify-content-center bd-highlight">
                  <div class="p-2 bd-highlight">
                    <a type="button" class="btn btn-warning btn-lg button-vote" @click="tryToLogin()"
                      >Войти</a
                    >
                  </div>
                  <div class="p-2 flex-shrink-1 bd-highlight">
                    <div class="pt-2 form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioNoLabel"
                        aria-label="..."
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Запомнить
                      </label>
                    </div>
                  </div>
                </div>
                <div class="alert alert-danger" v-if="this.error == 'badcredentials'" role="alert">
                  Неправильный логин или пароль
                </div>
                <div class="alert alert-warning" v-if="this.error == 'unknown'" role="alert">
                  Неизвестная ошибка, если она повторяется долгое время, свяжитесь с администрацией для решения проблемы
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно авторизации -->

  <!-- Модальное окно регистрации -->
  <div
    class="modal fade"
    id="modalregister"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg2">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="width: 700px;" class="card-sign">
            <div class="card-body">
              <div class="modal-logo2 p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                РЕГИСТРАЦИЯ
              </h1>
              <p class="fsub-text">
                Завершите простую регистрацию и скачайте клиент.
              </p>
              <form>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label class="mr-2 col-sm-2 col-form-label">Имя:</label>
                  <input
                    style="width: 230px;"
                    type="text"
                    class="form-input"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label class="mr-2 col-sm-2 col-form-label">Фамилия:</label>
                  <input
                    style="width: 230px;"
                    type="text"
                    class="form-input"
                    placeholder="Введите фамилию"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label for="inputEmail3" class="mr-2 col-sm-2 col-form-label"
                    >Игровой ник:</label
                  >
                  <input
                    style="width: 230px;"
                    type="text"
                    maxlength="12"
                    class="form-input"
                    placeholder="Игровое имя"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label for="inputEmail3" class="mr-2 col-sm-2 col-form-label"
                    >Ваша почта:</label
                  >
                  <input
                    style="width: 230px;"
                    type="email"
                    class="form-input"
                    id="inputEmail3"
                    placeholder="Ваш e-mail"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label for="inputEmail3" class="mr-2 col-sm-2 col-form-label"
                    >Ваш пароль:</label
                  >
                  <input
                    style="width: 230px;"
                    type="password"
                    maxlength="25"
                    size="40"
                    name="password"
                    class="form-input"
                    placeholder="Введите ваш пароль"
                  />
                </div>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label for="inputEmail3" class="mr-2 col-sm-2 col-form-label"
                    >Подтвердите:</label
                  >
                  <input
                    style="width: 230px;"
                    type="password"
                    maxlength="25"
                    size="40"
                    name="password"
                    class="form-input"
                    placeholder="Повторите пароль"
                  />
                </div>
                <div class="d-flex justify-content-center bd-highlight">
                  <div class="p-2 bd-highlight">
                    <a
                      href="index2.html"
                      type="submit"
                      class="btn btn-warning btn-lg button-vote"
                      >Создать</a
                    >
                  </div>
                  <div class="p-2 flex-shrink-1 bd-highlight">
                    <div class="pt-2 form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioNoLabel"
                        aria-label="..."
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Я ознакомился с
                        <a href="rules.html" target="_blank">правилами</a> и
                        <a href="offer.html" target="_blank">офертой</a>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно регистрации -->

  <!-- Модальное окно забыл пароль -->
  <div
    class="modal fade"
    id="modalclosed"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg2">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="width: 700px;" class="card-sign">
            <div class="card-body">
              <div class="modal-logo2 p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                Не можете войти?
              </h1>
              <p class="fsub-text">
                На вашу почту придет письмо с восстановлением пароля.
              </p>
              <form>
                <div class="form-outline mb-3 d-flex justify-content-center">
                  <label for="inputEmail3" class="mr-2 col-sm-2 col-form-label"
                    >Ваша почта:</label
                  >
                  <input
                    type="email"
                    class="form-input"
                    id="email"
                    placeholder="lorem@ipsum.com"
                  />
                </div>
                <div class="d-flex justify-content-center bd-highlight">
                  <div class="p-2 bd-highlight">
                    <a type="submit" class="btn btn-warning btn-lg button-vote"
                      >Отправить</a
                    >
                  </div>
                  <div class="p-2 flex-shrink-1 bd-highlight">
                    <div class="pt-2 pr-4 form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioNoLabel"
                        aria-label="..."
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Я не робот!
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно забыл пароль -->

  <!-- Модальное окно голосование -->
  <div
    class="modal fade"
    id="modalvotes"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg2">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="width: 700px;" class="card-sign">
            <div class="card-body">
              <div class="modal-logo2 p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                Голосование за проект
                <span
                  style="background-color: #4caf50!important;"
                  class="badge bg-secondary"
                  >112</span
                >
              </h1>
              <p class="fsub-text">
                Голосуйте за проект на разных площадках и получайте бонусы у
                нас.
              </p>
              <div class="d-flex justify-content-center">
                <div
                  class=""
                  style="width: 10rem;background-color: #f1f1f9; border-radius: 10px;"
                >
                  <img
                    src="../assets/images/icons/votes/panda.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">TOPCRAFT</h6>
                    <a
                      href="https://topcraft.ru/"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Голосовать</a
                    >
                  </div>
                </div>
                <div class="" style="width: 10rem;">
                  <img
                    src="../assets/images/icons/votes/monkey.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">MCTOP</h6>
                    <a
                      href="https://topcraft.ru/"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Голосовать</a
                    >
                  </div>
                </div>
                <div
                  class=""
                  style="width: 10rem;background-color: #f1f1f9; border-radius: 10px;"
                >
                  <img
                    src="../assets/images/icons/votes/whale.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">TOP-RATE</h6>
                    <a
                      href="https://topcraft.ru/"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Голосовать</a
                    >
                  </div>
                </div>
                <div class="" style="width: 10rem;">
                  <img
                    src="../assets/images/icons/votes/deer.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">TOPCRAFT</h6>
                    <a
                      href="https://topcraft.ru/"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Голосовать</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно голосование -->

  <!-- Модальное окно скачать клиент -->
  <div
    class="modal fade"
    id="modalclient"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg2">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="width: 700px;" class="card-sign">
            <div class="card-body">
              <div class="modal-logo2 p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                Скачать клиент
              </h1>
              <p class="fsub-text">
                Выберите подходящий для вас клиент и наслаждайтесь игрой.
              </p>
              <div class="d-flex justify-content-center">
                <div
                  class=""
                  style="width: 10rem;background-color: #f1f1f9; border-radius: 10px;"
                >
                  <img
                    src="../assets/images/icons/download/windows.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">Windows</h6>
                    <a
                      href="#"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Скачать</a
                    >
                  </div>
                </div>
                <div class="" style="width: 10rem;">
                  <img
                    src="../assets/images/icons/download/macos.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">MacOS</h6>
                    <a
                      href="#"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Скачать</a
                    >
                  </div>
                </div>
                <div
                  class=""
                  style="width: 10rem;background-color: #f1f1f9; border-radius: 10px;"
                >
                  <img
                    src="../assets/images/icons/download/linux.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">Linux</h6>
                    <a
                      href="#"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Скачать</a
                    >
                  </div>
                </div>
                <div class="" style="width: 10rem;">
                  <img
                    src="../assets/images/icons/download/jar.png"
                    class="card-img-top"
                    width="130"
                  />
                  <div class="card-body">
                    <h6 class="name-votes">.Jar Файл</h6>
                    <a
                      href="#"
                      target="_blank"
                      class="btn btn-warning btn-lg btn-vote"
                      >Скачать</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно скачать клиент -->

  <!-- Модальное окно пригласить -->
  <div
    class="modal fade"
    id="modalinvite"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-bg2">
        <div class="head-mod">
          <button
            type="button"
            class="btn-close close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="width: 700px;" class="card-sign">
            <div class="card-body">
              <div class="modal-logo2 p-3 pt-4">
                <img
                  src="../assets/images/headerlogo.png"
                  width="74"
                  height="47"
                  alt=""
                />
              </div>
              <h1 class="text-mod modal-title" id="staticBackdropLabel">
                Пригласить друзей
              </h1>
              <p class="fsub-text">
                Приглашайте своих друзей, что бы вместе покорить миры
                DungeonCraft
              </p>
              <div class="justify-content-center">
                <img
                  src="../assets/images/background/img-invite.png"
                  class="card-img-top"
                />
                <div class="card-body">
                  <div class="input-group">
                    <input
                      style="width: 485px;"
                      class="form-input"
                      id="formGroupExampleInput"
                      placeholder="https://dungeoncraft.ru/?page=register#eltazaris"
                    />
                    <a class="btn btn-warning button-news">Копировать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно пригласить -->
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Modals",
  data() {
    return {
        d_name: "",
        d_pass: ""
    };
  },
  computed: mapState([
    // map this.count to store.state.count
    "user",
     "error",
  ]),
  methods: {
    ...mapActions([
      "getLogin", // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
    async tryToLogin() {
      await this.getLogin({username: this.d_name, password: this.d_pass})
       if (this.error == "ok") {
          this.$refs.mybot.click()
       }
    }
  },
};
</script>
