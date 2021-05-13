<template>
  <div class="card-block">
    <div class="card-body justify-content-center">
      <h3 class="text-sidebar">Мониторинг</h3>
      <div class="line-sidebar"></div>
      <div class="mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-12" v-for="item in this.servers" :key="item.server_id">
            <div class="row g-0">
              <div
                class="pt-3 col-md-4 d-flex justify-content-center align-middle"
              >
                <img
                :src="require(`@/assets/images/icons/${item.server_type}.png`)"
        
                  width="100"
                  height="100"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="name-server">{{ item.server_name }}</h5>
                  <p class="sub-server" v-if="item.server_maxplayers > 0">Онлайн {{ item.server_players }}/{{ item.server_maxplayers }}</p>
                  <p class="sub-server" v-else>Выключен</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="'width: ' +  item.server_players/item.server_maxplayers*100 +'%; background-color: #00c629;'"
                      :aria-valuenow="item.server_players/item.server_maxplayers*100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
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
import { mapState } from 'vuex'

export default {
  name: "Monitoring",
  data() {
    return {
  
    };
  },
  beforeMount() {

  },
  computed: mapState([
    // map this.count to store.state.count
    "servers",
  ]),
};
</script>

<style scoped></style>
