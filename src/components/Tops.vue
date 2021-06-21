<template>
  <!-- ТОПЫ -->
  <div class="container">
    <div class="pt-5 d-flex justify-content-center">
      <img
        width="42px"
        height="62"
        src="../assets/images/stock-icon.png"
        alt=""
        class=""
      />
      <h1 class="rules-h">РЕЙТИНГ ИГРОКОВ</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm">
        <div class="card-block">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <img
                src="../assets/images/icons/top.png"
                width="24"
                height="24"
                style="margin-top: 5px;margin-left: 10px;"
              />
              <h3 class="text-news">ТОП-5 Голосование</h3>
            </div>
            <div class="line-sidebar"></div>
            <img src="../assets/images/background/img-top1.png" class="card-img-top" />
          </div>
        </div>
        <div class="card-block">
          <div class="card-body justify-content-center">
            <div class="mb-3" style="max-width: 540px;">
              <table class="table align-middle table-text">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Имя игрока:</th>
                    <th scope="col">Голосов:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in topstats.voters" :key="item.user_id">
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        :src="'../images/icons/numbers/'+ (index + 1) +'.png'"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                        v-if="item.user_avatar == false"
                      />
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        :src="'/uploads/avatars/' + item.user_name + '.png'"
                        width="64"
                        class=""
                        v-else
                      /><a href="#" style="color:#303030">{{ item.user_name }}</a>
                    </td>
                    <td style="text-align: center;">{{ item.user_votes }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--<div class="line-sidebar"></div>
            <h5 class="mon-text">Голосов за сутки: 0</h5>
            <h5 class="mon-text">Голосов за месяц: 0</h5>-->
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card-block">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <img
                src="../assets/images/icons/top.png"
                width="24"
                height="24"
                style="margin-top: 5px;margin-left: 10px;"
              />
              <h3 class="text-news">ТОП-5 Онлайн</h3>
            </div>
            <div class="line-sidebar"></div>
            <img src="../assets/images/background/img-top2.png" class="card-img-top" />
          </div>
        </div>
        <div class="card-block">
          <div class="card-body justify-content-center">
            <div class="mb-3" style="max-width: 540px;">
              <table class="table align-middle table-text">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Имя игрока:</th>
                    <th scope="col">Время:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in topstats.online" :key="item.user_id">
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        :src="'../images/icons/numbers/'+ (index + 1) +'.png'"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                     <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                        v-if="item.user_avatar == false"
                      />
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        :src="'/uploads/avatars/' + item.user_name + '.png'"
                        width="64"
                        class=""
                        v-else
                      /><a href="#" style="color:#303030">{{ item.user_name }}</a>
                    </td>
                    <td style="text-align: center;">{{ humanizeDate(item.user_time) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--<div class="line-sidebar"></div>
             <h5 class="mon-text">Онлайн за сутки: 0</h5>
            <h5 class="mon-text">Рекорд за месяц: 0</h5> -->
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card-block">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <img
                src="../assets/images/icons/top.png"
                width="24"
                height="24"
                style="margin-top: 5px;margin-left: 10px;"
              />
              <h3 class="text-news">ТОП-5 Убийств</h3>
            </div>
            <div class="line-sidebar"></div>
            <img src="../assets/images/background/img-top3.png" class="card-img-top" />
          </div>
        </div>
        <div class="card-block">
          <div class="card-body justify-content-center">
            <div class="mb-3" style="max-width: 540px;">
              <table class="table align-middle table-text">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Имя игрока:</th>
                    <th scope="col">Убийств:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        src="../assets/images/icons/numbers/1.png"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                      /><a href="#" style="color:#303030">Eltazaris</a>
                    </td>
                    <td style="text-align: center;">42</td>
                  </tr>
                  <tr>
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        src="../assets/images/icons/numbers/2.png"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                      /><a href="#" style="color:#303030">pizza</a>
                    </td>
                    <td style="text-align: center;">38</td>
                  </tr>
                  <tr>
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        src="../assets/images/icons/numbers/3.png"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                      /><a href="#" style="color:#303030">Lonely_Wolf</a>
                    </td>
                    <td style="text-align: center;">22</td>
                  </tr>
                  <tr>
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        src="../assets/images/icons/numbers/4.png"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                      /><a href="#" style="color:#303030">Yummy</a>
                    </td>
                    <td style="text-align: center;">42</td>
                  </tr>
                  <tr>
                    <th style="padding-left: 35px;" scope="row">
                      <img
                        src="../assets/images/icons/numbers/5.png"
                        width="24"
                        height="24"
                      />
                    </th>
                    <td>
                      <img
                        style="padding: 5px; border-radius: 35px;"
                        src="../assets/images/icons/profile.png"
                        width="64"
                        class=""
                      /><a href="#" style="color:#303030">JiLee</a>
                    </td>
                    <td style="text-align: center;">38</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--<div class="line-sidebar"></div>
             <h5 class="mon-text">Убийств за сутки: 0</h5>
            <h5 class="mon-text">Убийств за месяц: 0</h5> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ТОПЫ -->
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions([
      "getTopStats"
    ]),
    humanizeDate(text) {
      text = this.$moment
        .utc(this.$moment.duration(text, "minutes").asMilliseconds())
        .format("HH ч mm м");
      //text = this.$moment.duration("-65", "minutes").humanize({d: 7, w: 4});
      return text;
    },
  },
  beforeMount() {
    this.getTopStats()
  },
  computed:{
    ...mapState([
      "topstats"
    ])
  }
}
</script>