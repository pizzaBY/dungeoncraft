<template>
    <!-- Новости --><br>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="card-block">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/images/icons/news-icon.png" width="24" height="24"
                                style="margin-top: 5px;margin-left: 10px;">
                            <h3 class="text-news">Глобальные обновления</h3>
                        </div>
                        <img src="../assets/images/background/img2.jpg" class="card-img-top">
                        <p class="subtext-news">Добро пожаловать, новичок на наш сайт! В данной статье вы можете
                            ознакомиться со списком горячих обновлений за "Январь" месяц! Читайте полную новость, и
                            узнаете все актуальные моменты на сегодняшний день!</p>
                        <div class="d-flex">
                            <p class=""><img src="../assets/images/icons/date.png" width="16" height="16"
                                    style="margin-bottom: 3px; margin-left: 15px;"> 15 марта, 2021</p>
                            <p style="margin-left: 30px;"><img src="../assets/images/icons/eyes.png" width="16" height="16"
                                    style="margin-bottom: 3px;"> 243</p>
                            <a href="news.html" class="btn btn-warning button-news">Подробнее...</a>
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/images/icons/news-icon.png" width="24" height="24"
                                style="margin-top: 5px;margin-left: 10px;">
                            <h3 class="text-news">Новая магическая сборка</h3>
                        </div>
                        <img src="../assets/images/background/img1.jpg" class="card-img-top">
                        <p class="subtext-news">Добро пожаловать, новичок на наш сайт! В данной статье вы можете
                            ознакомиться со списком горячих обновлений за "Январь" месяц! Читайте полную новость, и
                            узнаете все актуальные моменты на сегодняшний день!</p>
                        <div class="d-flex">
                            <p><img src="../assets/images/icons/date.png" width="16" height="16"
                                    style="margin-bottom: 3px; margin-left: 15px;"> 15 марта, 2021</p>
                            <p style="margin-left: 30px;"><img src="../assets/images/icons/eyes.png" width="16" height="16"
                                    style="margin-bottom: 3px;"> 243</p>
                            <a href="news.html" class="btn btn-warning button-news">Подробнее...</a>
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/images/icons/news-icon.png" width="24" height="24"
                                style="margin-top: 5px;margin-left: 10px;">
                            <h3 class="text-news">Новая магическая сборка</h3>
                        </div>
                        <img src="../assets/images/background/img2.jpg" class="card-img-top">
                        <p class="subtext-news">Добро пожаловать, новичок на наш сайт! В данной статье вы можете
                            ознакомиться со списком горячих обновлений за "Январь" месяц! Читайте полную новость, и
                            узнаете все актуальные моменты на сегодняшний день!</p>
                        <div class="d-flex">
                            <p class=""><img src="../assets/images/icons/date.png" width="16" height="16"
                                    style="margin-bottom: 3px; margin-left: 15px;"> 15 марта, 2021</p>
                            <p style="margin-left: 30px;"><img src="../assets/images/icons/eyes.png" width="16" height="16"
                                    style="margin-bottom: 3px;"> 243</p>
                            <a href="news.html" class="btn btn-warning button-news">Подробнее...</a>
                        </div>
                    </div>
                </div>
                <!-- Пагинация -->
                <div class="card-block mb-3">
                    <div class="card-pagination"></div>
                    <nav aria-label="...">
                        <ul class="pagination pagination-lg d-flex justify-content-center bd-highlight">
                            <li class="page-item disabled pl-1">
                                <a class="page-link icon-left" href="#" tabindex="-1" aria-disabled="true"></a>
                            </li>
                            <li class="page-item active pl-1" aria-current="page">
                                <span class="page-link">
                                    1
                                    <span class="sr-only">(current)</span>
                                </span>
                            </li>
                            <li class="page-item pl-1"><a class="page-link" href="#">2</a></li>
                            <li class="page-item pl-1"><a class="page-link" href="#">3</a></li>
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
                <div class="card-block">
                    <div class="card-body justify-content-center">
                        <h3 class="text-sidebar">Авторизация</h3>
                        <div class="line-sidebar"></div>
                        <div class="d-flex justify-content-center bd-highlight">
                            <div class="p-2 bd-highlight">
                                <a type="button" data-bs-toggle="modal" data-bs-target="#modalauthorization"
                                    class="btn btn-warning btn-lg button-auto">Авторизация</a>
                            </div>
                            <div class="p-2 flex-shrink-1 bd-highlight">
                                <a type="button" data-bs-toggle="modal" data-bs-target="#modalclosed"
                                    class="btn btn-warning btn-lg button-lock"><i class="bi-shield-lock"></i></a>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center bd-highlight">
                            <div class="bd-highlight">
                                <a type="button" data-bs-toggle="modal" data-bs-target="#modalregister"
                                    class="btn btn-warning btn-lg button-reg">Регистрация</a>
                            </div>
                        </div>

                    </div>
                </div>
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
import cSocial from '@/components/blocks/Social.vue'
import cVoting from '@/components/blocks/Voting.vue'
import cMonitoring from '@/components/blocks/Monitoring.vue'

export default {
    name: "News",
  components: {
    cSocial,
    cVoting,
    cMonitoring
  }
}
</script>

<style scoped>

</style>