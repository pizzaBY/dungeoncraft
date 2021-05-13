<template>
  <!-- Новости --><br />
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div v-if="this.news.length > 0">
          <div class="card-block" v-for="item in this.news" :key="item.news_id">
            <div class="card-body">
              <div class="d-flex">
                <img
                  src="../assets/images/icons/news-icon.png"
                  width="24"
                  height="24"
                  style="margin-top: 5px;margin-left: 10px;"
                />
                <h3 class="text-news">{{ item.news_name }}</h3>
              </div>
              <img
                src="../assets/images/background/img2.jpg"
                class="card-img-top"
              />
              <p class="subtext-news">
                {{ newsSlice(item.news_text) }}
              </p>
              <div class="d-flex">
                <p class="">
                  <img
                    src="../assets/images/icons/date.png"
                    width="16"
                    height="16"
                    style="margin-bottom: 3px; margin-left: 15px;"
                  />
                  {{ formatDate(item.news_time) }}
                </p>
                <a href="news.html" class="btn btn-warning button-news"
                  >Подробнее...</a
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="card-block">
            <div class="card-body">
              Нет новостей :(
            </div>
          </div>
        </div>

        <!-- Пагинация -->
        <div class="card-block mb-3">
          <div class="card-pagination"></div>
          <nav aria-label="...">
            <ul
              class="pagination pagination-lg d-flex justify-content-center bd-highlight"
            >
              <li class="page-item disabled pl-1">
                <a
                  class="page-link icon-left"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                ></a>
              </li>
              <li class="page-item active pl-1" aria-current="page">
                <span class="page-link">
                  1
                  <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="page-item pl-1">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item pl-1">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item pl-1">
                <a class="page-link icon-right" href="#"></a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Пагинация -->
      </div>

      <!-- Новости -->

      <div class="col-4">
        
        <!-- Авторизация -->
        <cUserRight/>
        <!-- Авторизация -->

        <!-- Мониторинг -->
        <cMonitoring />
        <!-- Мониторинг -->

        <!-- Голосование -->
        <cVoting />
        <!-- Голосование -->

        <!-- Социальные сети -->
        <cSocial />
        <!-- Социальные сети -->
      </div>
    </div>
  </div>
</template>

<script>
import cSocial from "@/components/blocks/Social.vue";
import cVoting from "@/components/blocks/Voting.vue";
import cMonitoring from "@/components/blocks/Monitoring.vue";
import cUserRight from "@/components/UserProfile.vue";

import { mapState } from "vuex";

export default {
  name: "News",
  components: {
    cSocial,
    cVoting,
    cMonitoring,
    cUserRight
  },
  data() {
    return {};
  },
  methods: {
    newsSlice(text) {
      if (text.length > 120) {
        return text.slice(0, 119) + "...";
      }
      return text;
    },
    formatDate(text) {
      text = this.$moment(text * 1000).format("DD MMMM, YYYY");
      return text;
    },
  },
  beforeMount() {
    this.$store.dispatch("getNews");
  },
  computed: mapState([
    // map this.count to store.state.count
    "news",
  ]),
};
</script>

<style scoped></style>
