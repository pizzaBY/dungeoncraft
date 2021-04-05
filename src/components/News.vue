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
                                <a type="button" data-toggle="modal" data-target="#modalauthorization"
                                    class="btn btn-warning btn-lg button-auto">Авторизация</a>
                            </div>
                            <div class="p-2 flex-shrink-1 bd-highlight">
                                <a type="button" data-toggle="modal" data-target="#modalclosed"
                                    class="btn btn-warning btn-lg button-lock"><i class="bi-shield-lock"></i></a>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center bd-highlight">
                            <div class="bd-highlight">
                                <a type="button" data-toggle="modal" data-target="#modalregister"
                                    class="btn btn-warning btn-lg button-reg">Регистрация</a>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- Авторизация -->

                <!-- Мониторинг -->
                <div class="card-block">
                    <div class="card-body justify-content-center">
                        <h3 class="text-sidebar">Мониторинг</h3>
                        <div class="line-sidebar"></div>
                        <div class="mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
                                    <img src="../assets/images/icons/classic.png" width="100px" height="100px">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-server">Classic</h5>
                                        <p class="sub-server">Онлайн 25/100</p>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%; background-color: #00c629;"
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
                                    <img src="../assets/images/icons/magic.png" width="100px" height="100px">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-server">Magic and RPG</h5>
                                        <p class="sub-server">Онлайн 45/100</p>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 45%; background-color: #b824c5;"
                                                aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
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
                <!-- Мониторинг -->

                <!-- Голосование -->
                <div class="card-block">
                    <div class="card-body justify-content-center">
                        <h3 class="text-sidebar">Голосование</h3>
                        <div class="line-sidebar"></div>
                        <div class="mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
                                    <img src="../assets/images/icons/profile.png" width="100" height="100">
                                    <div class="icon-dev"></div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-server">Eltazaris</h5>
                                        <p class="sub-server">Госовал в McTop</p>
                                        <p style="line-height: 0px;" class="sub-server">12 минут назад</p>
                                    </div>
                                </div>
                                <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
                                    <img src="../assets/images/icons/profile.png" width="100" height="100">
                                    <div class="icon-dev"></div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-server">Lonely_Wolf</h5>
                                        <p class="sub-server">Госовал в TopCraft</p>
                                        <p style="line-height: 0px;" class="sub-server">12 минут назад</p>
                                    </div>
                                </div>
                                <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
                                    <img src="../assets/images/icons/profile.png" width="100" height="100">
                                    <div class="icon-moder"></div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-server">pizza</h5>
                                        <p class="sub-server">Госовал в TopCraft</p>
                                        <p style="line-height: 0px;" class="sub-server">12 минут назад</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-sidebar"></div>
                        <h5 class="mon-text">За каждый голос вы получаете бонус</h5>
                        <div class="d-flex justify-content-center bd-highlight">
                            <a href="#" type="button" data-toggle="modal" data-target="#modalvotes"
                                class="btn btn-warning btn-lg button-vote">Голосовать</a>
                        </div>
                    </div>
                </div>
                <!-- Голосование -->

                <!-- Социальные сети -->
                <div class="card-block">
                    <div class="card-body justify-content-center">
                        <h3 class="text-sidebar">Наши соц. сети</h3>
                        <div class="line-sidebar"></div>
                        <div class="mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="pt-3 col-md-4 d-flex justify-content-center">
                                    <img src="../assets/images/icons/vk.png" width="100" height="100">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-soc">Сообщество Вконтакте</h5>
                                    </div>
                                </div>
                                <a href="/" class="pt-3 col-md-4 d-flex justify-content-center">
                                    <img src="../assets/images/icons/youtube.png" width="100" height="100">
                                </a>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-soc">YouTube<br>канал</h5>
                                    </div>
                                </div>
                                <div class="pt-3 col-md-4 d-flex justify-content-center">
                                    <img src="../assets/images/icons/discord.png" width="100" height="100">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="name-soc">Discord<br>канал</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-sidebar"></div>
                        <h5 class="mon-text">Приглашай друзей и получай бонусы</h5>
                        <div class="d-flex justify-content-center bd-highlight">
                            <a href="#" data-toggle="modal" data-target="#modalinvite" type="button"
                                class="btn btn-warning btn-lg button-vote">Пригласить</a>
                        </div>
                    </div>
                </div>
                <!-- Социальные сети -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "News",
}
</script>

<style scoped>

</style>