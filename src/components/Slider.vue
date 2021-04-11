<template>
  <!-- Слайдер -->
  <div class="bg-lefts"></div>
  <div class="container" data-aos="fade-up">
    <div
      id="MySlider"
      class="carousel slide"
       data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#MySlider"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#MySlider" data-bs-slide-to="1"></li>
        <li data-bs-target="#MySlider
        " data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="circle1 circle1-pos orbit1"></div>
          <div class="decor-bzz3 box1 bounce-2"></div>
          <div class="decor-bzz4 box1 bounce-2"></div>
          <div class="row justify-content-center">
            <div class="col-7">
              <div class="style-slider">
                <h1 class="font-weight9">
                  УНИКАЛЬНЫЙ ПРОЕКТ<br />ДЛЯ ТЕБЯ И ТВОИХ ДРУЗЕЙ
                </h1>
                <br />
                <h2>
                  На данный момент вы можете,<br />Играть на <b>Classic</b> и
                  <b>MagicRPG!</b>
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
                src="../assets/images/logo.png"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-7">
              <div class="style-slider">
                <h1 class="font-weight9">
                  ТРЕЙЛЕР<br />КЛАССИЧЕСКОГО СЕРВЕРА!
                </h1>
                <br />
                <h2>
                  На данный момент вы можете,<br />Играть на <b>Classic</b> и
                  <b>MagicRPG!</b>
                </h2>
                <br />
                <a
                  style="padding: 15px"
                  href="#"
                  class="btn btn-outline-warning button-start"
                  type="submit"
                  >Смотреть на<i class="tube-icon"></i
                ></a>
              </div>
            </div>
            <div style="padding-bottom: 187px" class="col-5 d-flex">
              <iframe
                style="margin-top: 100px; border-radius: 25px"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1DhWXAiNgfQ?controls=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-7">
              <div class="style-slider">
                <h1 class="font-weight9">СТАНЬ УСПЕШНЫМ<br />ТОРГОВЦЕМ!</h1>
                <br />
                <h2>
                  На классическом сервере<br />у нас есть, <b>Магазин</b> и
                  <b>Аукцион!</b>
                </h2>
                <br />
                <a
                  style="padding: 15px"
                  href="start.html"
                  class="btn btn-outline-warning button-start"
                  type="submit"
                  >Начать игру<i class="start-icon"></i
                ></a>
              </div>
            </div>
            <div class="col-5 d-flex">
              <img
                class="box bounce-2 img-logo"
                src="../assets/images/logo2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Слайдер -->
</template>

<script>
export default {
  name: "Slider",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
