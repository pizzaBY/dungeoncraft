<template>
  <!-- Слайдер -->
  <div class="bg-top"></div>
  <div class="container" data-aos="fade-up">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="circle1 circle1-pos orbit1"></div>
          <div class="decor-bzz3 box1 bounce-2"></div>
          <div class="decor-bzz4 box1 bounce-2"></div>
          <div class="row justify-content-center">
            <div class="col-7">
              <div class="style-slider">
                <h1 class="font-weight9">
                  ТОП-5 ЛУЧШИХ ИГРОКОВ <br />ПРОЕКТА DUNGEONCRAFT
                </h1>
                <br />
                <h2>
                  Три первых игрока в списке получают бонусы каждый месяц!
                </h2>
                <br />
                <router-link
                  style="padding: 15px"
                  :to="{ name: 'rStart' }"
                  class="btn btn-outline-warning button-start"
                  type="submit"
                  >Начать игру<i class="start-icon"></i
                ></router-link>
              </div>
            </div>
            <div class="col-5 d-flex">
              <img
                class="box bounce-2 img-logo"
                src="../assets/images/logo4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Слайдер -->
</template>
