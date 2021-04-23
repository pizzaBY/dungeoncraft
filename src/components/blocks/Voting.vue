<template>
  <div class="card-block">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Голосование</h3>
      <div class="line-sidebar"></div>
      <div class="mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-12" v-for="item in lastvotes" :key="item.vote_id">
            <div class="row g-0">
              <div
                class="pt-3 col-md-4 d-flex justify-content-center align-middle"
              >
                <img
                    :src="'https://dungeoncraft.ru/uploads/skin.php?type=head&name='+item.vote_user+''"
                  class="rounded-circle"
                  width="100"
                  height="100"
                  v-if="item.vote_image == true"
                />
                <img
              src="../../assets/images/icons/profile.png"
              width="100"
              height="100"
              v-else
            />
                <div class="icon-dev"></div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="name-server">{{ item.vote_user }}</h5>
                  <p class="sub-server">Госовал в {{ item.vote_name }}</p>
                  <p style="line-height: 0px;" class="sub-server">
                    12 минут назад
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line-sidebar"></div>
      <h5 class="mon-text">За каждый голос вы получаете бонус</h5>
      <div class="d-flex justify-content-center bd-highlight">
        <a
          href="#"
          type="button"
          data-toggle="modal"
          data-target="#modalvotes"
          class="btn btn-warning btn-lg button-vote"
          >Голосовать</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Voting",
  data() {
    return {
      lastvotes: [],
    };
  },
  beforeMount() {
    this.$axios
      .get("/api/votes/getLast")
      .then((response) => (this.lastvotes = response.data.data));
  },
};
</script>

<style scoped></style>
