<template>
  <div class="card-block">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Наши соц. сети</h3>
      <div class="line-sidebar"></div>
      <div class="mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="pt-3 col-md-4 d-flex justify-content-center">
            <img src="../../assets/images/icons/vk.png" width="100" height="100" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="name-soc">Сообщество Вконтакте</h5>
            </div>
          </div>
          <a href="/" class="pt-3 col-md-4 d-flex justify-content-center">
            <img
              src="../../assets/images/icons/youtube.png"
              width="100"
              height="100"
            />
          </a>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="name-soc">YouTube<br />канал</h5>
            </div>
          </div>
          <div class="pt-3 col-md-4 d-flex justify-content-center">
            <img
              src="../../assets/images/icons/discord.png"
              width="100"
              height="100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="name-soc">Discord<br />канал</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="line-sidebar"></div>
      <h5 class="mon-text">Приглашай друзей и получай бонусы</h5>
      <div class="d-flex justify-content-center bd-highlight">
        <a
          href="#"
          data-toggle="modal"
          data-target="#modalinvite"
          type="button"
          class="btn btn-warning btn-lg button-vote"
          >Пригласить</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
};
</script>

<style scoped></style>
