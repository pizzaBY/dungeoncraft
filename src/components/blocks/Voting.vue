<template>
  <div class="card-block">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Голосование</h3>
      <div class="line-sidebar"></div>
      <div class="mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <template v-for="item in this.voters" :key="item.vote_id">
            <div class="col-12" v-if="item.user_lastvote > 0">
              <div class="row g-0">
                <div
                  class="pt-3 col-md-4 d-flex justify-content-center align-middle"
                >
                  <div class="">
          <img
            src="../../assets/images/icons/profile.png"
            width="100"
            height="100"
            class="rounded-circle"
            v-if="item.user_avatar == false"
          />
          <img
            :src="'uploads/avatars/' + item.user_name + '.png'"
            width="100"
            height="100"
            class="rounded-circle"
            v-else
          />
          <div class="position-relative">
            <div class="position-absolute bottom-0 end-0">
              <div class="icon-dev"></div>
            </div>
          </div>
        </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="name-server">{{ item.user_name }}</h5>
                    <p class="sub-server">Госовал</p>
                    <p style="line-height: 0px;" class="sub-server">
                      {{ diffDate(item.user_lastvote) }} назад
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
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
import { mapState } from "vuex";

export default {
  name: "Voting",
  data() {
    return {};
  },
  computed: mapState([
    // map this.count to store.state.count
    "voters",
  ]),
  methods: {
    diffDate(date) {
      let x = this.$moment.unix(date)
      let y = this.$moment.now()
      return this.$moment.duration(x.diff(y)).humanize()
    }
  },
  beforeMount() {
    this.$store.dispatch("getVoters");
    
  
    
  },
};
</script>

<style scoped></style>
