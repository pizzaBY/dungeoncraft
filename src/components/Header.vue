<template>
  <!-- Шапка сайта -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light header">
      <div class="container">
        <!-- Кнопка для смартфона -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Кнопка для смартфона -->
        <a class="navbar-brand scalelogo" href="/">
          <img
            src="../assets/images/headerlogo.png"
            width="74"
            height="47"
            alt=""
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul
            style="padding-top: 10px;"
            class="navbar-nav mr-auto mb-2 mb-lg-0 w-100 justify-content-center"
          >
            <li class="nav-item button-head">
              <div class="ico-buttonHead main-ico"></div>
              <router-link
                class="nav-link"
                :to="{ name: 'rHome' }"
                role="navigation"
                >Главная</router-link
              >
            </li>
            <li class="nav-item button-head">
              <div class="ico-buttonHead shop-ico"></div>
              <router-link
                class="nav-link"
                :to="{ name: 'rServices' }"
                role="navigation"
                >Услуги</router-link
              >
            </li>
            <li class="nav-item button-head dropdown">
              <div class="ico-buttonHead rules-ico"></div>
              <a
                class="nav-link dropdown-toggle"
                id="navbarDarkDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Разделы</a
              >
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'rRules' }"
                    role="navigation"
                    >Правила
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'rBanlist' }"
                    role="navigation"
                    >Бан-лист</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'rTops' }"
                    role="navigation"
                    >ТОП 5</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item button-head dropdown">
              <div class="ico-buttonHead servers-ico"></div>
              <a
                class="nav-link dropdown-toggle"
                id="navbarDarkDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Сервера</a
              >
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'rSclassic' }"
                    role="navigation"
                    >Classic 1.7.10</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item button-head">
              <div class="ico-buttonHead guild-ico"></div>
              <a class="nav-link" aria-current="page" href="#"
                >Гильдии</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <a
              href="#"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalclient"
              class="btn btn-outline-warning button-client"
              >Скачать клиент</a
            >
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- Шапка сайта -->
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
