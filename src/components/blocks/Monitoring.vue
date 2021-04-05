<template>
  <div class="card-block">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Мониторинг</h3>
      <div class="line-sidebar"></div>
      <div class="mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
            <img
              src="../../assets/images/icons/classic.png"
              width="100"
              height="100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="name-server">Classic</h5>
              <p class="sub-server">Онлайн 25/100</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%; background-color: #00c629;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
            <img
              src="../../assets/images/icons/magic.png"
              width="100"
              height="100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="name-server">Magic and RPG</h5>
              <p class="sub-server">Онлайн 45/100</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 45%; background-color: #b824c5;"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line-sidebar"></div>
      <h5 class="mon-text">Рекорд за сутки: 25</h5>
      <h5 class="mon-text">Абсолютный рекорд: 147</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Monitoring",
};
</script>

<style scoped></style>
