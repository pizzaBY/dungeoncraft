<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Классический сервер 1.7.10</h3>
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                  <img
                    src="../../assets/images/background/img5.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img
                    src="../../assets/images/background/img6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/background/img2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Назад</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Далее</span>
              </a>
            </div>
            <p class="subtext-news">
              Многим игрокам нравиться старый добрый Minecraft без лишних модов.
              Данный сервер представляет собой классический вариант серверов, но
              со своей изюминкой. Мы можем вас порадовать интересной экономикой,
              системой гильдий, а так же внутриигровым магазином с большим видом
              товаров. Также присутствует обмен вещей или валюты между игроками,
              персонализация - модификация позволяющая изменить внешний вид
              вашего персонажа. Данная функция даёт возможность устанавливать
              головные уборы, носить что-то на спине, а так же завести питомца.
              Присутствуют боевая арена и 2 подземелья для получения опыта.
              Сражайся за право быть лучшим в чудесном мире Alfheim.
            </p>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Встроенные модифицикации</h3>
            <div class="d-flex">
              <div class="col-md-6 p-2">
                <p class="mon-text">Модифицикации:</p>
                <div class="accordion" id="accordionExample">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/shop.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Магазин блоков
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="p-2 collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <img
                      src="../../assets/images/background/mods/shop.jpg"
                      class="card-img-top"
                    />
                    Данный магазин вызывается командой <b>/shop</b> или кнопкой
                    в меню при нажатии <b>"ESC"</b>. После покупки ваши предметы
                    отправляются в ваш инвентарь. Вызвать командой
                    <b>/inventory</b>.
                  </div>
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/trade.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Обмен между игроками
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="p-2 collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <img
                      src="../../assets/images/background/mods/barter.jpg"
                      class="card-img-top"
                    />
                    Данная функция вызывается через "взаимодействие" либо через
                    команды:<br />
                    <b>/trade [имя игрока]</b> - предложить обмен<br />
                    <b>/trade accept [имя игрока]</b> - принять предложение.<br />
                    <b>/trade cancel [имя игрока]</b> - отклонить
                    предложение.<br />
                    * Обмену подлежат как и ресурсы, так и денежная валюта "Gold
                    Coin's"
                  </div>
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/custom.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Кастомизация
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="p-2 collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <img
                      src="../../assets/images/background/mods/custom.jpg"
                      class="card-img-top"
                    />
                    Данная функция позволит приобрести головные уборы, маски,
                    крылья, рюкзаки и даже питомцев.
                  </div>
                  <div class="card-header" id="headingFour">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/smiles.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Моногокальный чат и стикеры
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    class="p-2 collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <img
                      src="../../assets/images/background/mods/smiles.jpg"
                      class="card-img-top"
                    />
                    Многоканальный чат позволяет грамотно разделить общение
                    между игроками. Есть возможность отправлять смайлики и
                    стикеры (аналогичные Вконтакте).
                  </div>
                </div>
              </div>
              <div class="col-md-6 p-2">
                <p class="mon-text">Специальные плагины:</p>
                <div class="accordion" id="accordionExample">
                  <div class="card-header" id="headingFive">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/exp.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        AutoMessage
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    class="p-2 collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    В общем чате отображает настраемывае серверные сообщения.
                  </div>
                  <div class="card-header" id="headingSix">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/redstone.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        AutoSaveWorld
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSix"
                    class="p-2 collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordionExample"
                  >
                    Данный плагин используется для дополнительно сохранения
                    мира, а так же его резервирования.
                  </div>
                  <div class="card-header" id="headingSeven">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/lavacrem.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        ChatGuard
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSeven"
                    class="p-2 collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordionExample"
                  >
                    Защищает игровой мир от флуда, спама, и ругательств в чате,
                    команд и знаков.
                  </div>
                  <div class="card-header" id="headingEight">
                    <h2 class="mb-0 d-flex">
                      <img
                        src="../../assets/images/icons/mods/star.png"
                        width="24"
                        height="24"
                        style="margin: auto;"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        ClearLag
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseEight"
                    class="p-2 collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionExample"
                  >
                    Многоканальный плагин позволяющий очищать мир от предметов,
                    сущеностей, а так же лагов.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-block">
          <h3 class="text-sidebar p-3">Команды классического сервера 1.7.10</h3>
          <div
            style="text-align: -webkit-center;"
            class="accordion accordion-flush mb-5"
            id="accordionFlushExample"
          >
            <div
              class="accordion-item"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div
                class="accordion-header comands-content-block-title"
                id="flush-headingOne"
              >
                <div class="comands-ico-r1"></div>
                <div class="rules-name-content-block">Основные команды</div>
                <div class="rules-arrow-content-block"></div>
              </div>
              <div
                id="flush-collapseOne"
                class="comands-content-block-title open-rules-block accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  style="text-align: left;color: #a9a9af; font-size: 16px; font-weight: bold; padding: 40px;"
                  class="accordion-body"
                >
                  /help - Вывести список всех команд;<br />
                  /spawn - Телепортироваться на стартовую точку;<br />
                  /kit – Список доступных наборов;<br />
                  /list - Список игроков на сервере;<br />
                  /shop - Открыть магазин ресурсов;<br />
                  /inventory - Открыть корзину ресурсов;<br />
                  /tpaccept - Принять запрос телепортации;<br />
                  /tpdeny - Отклонить запрос телепортации;<br />
                  /msg [имя игрока] [сообщение] - Написать приватное
                  сообщение;<br />
                  * Клавиша [P] дает возможность взаимодействовать с игроками;
                </div>
              </div>
            </div>
            <div
              class="accordion-item"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div
                class="accordion-header comands-content-block-title"
                id="flush-headingTwo"
              >
                <div class="comands-ico-r2"></div>
                <div class="rules-name-content-block">
                  Территориальные команды
                </div>
                <div class="rules-arrow-content-block"></div>
              </div>
              <div
                id="flush-collapseTwo"
                class="comands-content-block-title open-rules-block accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  style="text-align: left;color: #a9a9af; font-size: 16px; font-weight: bold; padding: 40px;"
                  class="accordion-body"
                >
                  <b>Приват территории:</b><br />
                  //wand - Получить деревянный топор;<br />
                  /region claim [название региона] - Создать регион;<br />
                  /region remove [название региона] - Удалить регион;<br />
                  /region list – Открыть список регионов;<br />
                  /region addmember [название региона] [имя игрока] - Добавить
                  участника в регион;<br />
                  /region removemember [название региона] [имя игрока] - Удалить
                  участника из региона;<br />
                  /region addowner [название региона] [имя игрока] - Добавить
                  владельца в регион;<br />
                  /region removeowner [название региона] [имя игрока] - Удалить
                  владельца из региона;<br />
                  <hr />
                  <b>Ваш дом:</b><br />
                  /home help - Показывает помощь по командам;<br />
                  /sethome - Установить точку дома;<br />
                  /home - Телепортироваться домой;<br />
                  /home delete - Удаляет точку вашего дома;<br />
                  /home point - Направляет компас на Ваш дом;<br />
                  /home [имя игрока] - Телепортироваться домой к другому
                  игроку;<br />
                  /home list - Показывает, чей дом вы можете посетить;<br />
                  /home ilist - Показывает, кто может посетить Ваш дом;<br />
                  /home invite [имя игрока] - Приглашает игрока [имя игрока] в
                  ваш дом;<br />
                  /home uninvite [имя игрока] - Выгоняет игрока [имя игрока] из
                  Вашего дома;<br />
                  <hr />
                  <b>Флаги:</b><br />
                  /region flag [название региона] [название флага] [значение:
                  allow или deny] - Установка флагов для региона;<br />
                  Доступные флаги для игроков:<br />
                  chest-access - Запретить доступ к сундукам;<br />
                  fire-spread - Разрешить распространение огня;<br />
                  use - Разрешить использование кнопок, дверей, рычагов, и
                  т.п;<br />
                  vehicle-destroy - Разрешение на удаление транспорта;<br />
                  vehicle-place - Разрешить размещение транспорта.<br />
                </div>
              </div>
            </div>
            <div
              class="accordion-item"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div
                class="accordion-header comands-content-block-title"
                id="flush-headingThree"
              >
                <div class="comands-ico-r3"></div>
                <div class="rules-name-content-block">
                  Доступные команды для VIP
                </div>
                <div class="rules-arrow-content-block"></div>
              </div>
              <div
                id="flush-collapseThree"
                class="comands-content-block-title open-rules-block accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  style="text-align: left;color: #a9a9af; font-size: 16px; font-weight: bold; padding: 40px;"
                  class="accordion-body"
                >
                  /kit vip - Получить стартовый набор;<br />
                  /workbench или /craft - Открыть верстак;<br />
                  /heal - Вылечить себя (интервал 5 минут);<br />
                  /hat - Надеть блок на голову;<br />
                  /exp (others) - Просмотр опыта у себя или игроков;<br />
                  /tpa [имя игрока] - Запрос на телепортацию к игроку;<br />
                  <hr />
                  <b>Доступные флаги для VIP:</b><br />
                  pvp - Разрешает/запрещает PvP;<br />
                  lava-fire - Разрешает поджог от лавы.<br />
                  <hr />
                  * После смерти ваши вещи остаются в инвентаре;<br />
                  * Возможность находиться афк на сервере;<br />
                  * Резервные места, всегда сможете зайди на сервер;<br />
                  * Разрешено писать цветной текст на табличках;<br />
                  * Добавляет три новых набора стикеров: "Персик", "Гиена",
                  "Влад".<br />
                </div>
              </div>
            </div>
            <div
              class="accordion-item"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <div
                class="accordion-header comands-content-block-title"
                id="flush-headingFour"
              >
                <div class="comands-ico-r4"></div>
                <div class="rules-name-content-block">
                  Доступные команды для PREMIUM
                </div>
                <div class="rules-arrow-content-block"></div>
              </div>
              <div
                id="flush-collapseFour"
                class="comands-content-block-title open-rules-block accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  style="text-align: left;color: #a9a9af; font-size: 16px; font-weight: bold; padding: 40px;"
                  class="accordion-body"
                >
                  /kit premium - Получить стартовый набор;<br />
                  /tpahere [имя игрока] - Отправить запрос на телепортацию
                  игрока к вам<br />
                  /home public - Делает Ваш дом общедоступным;<br />
                  /home private - Делает Ваш дом приватным;<br />
                  /clearinventory - Очищает инвентарь полностью;<br />
                  /enderchest - Удалённый доступ к "Сундуку Ендера";<br />
                  /repair - Возможность ремонтировать вещи;<br />
                  /feed - Утоляет голод (интервал 5 минут);<br />
                  /back - Возвращает вас к предыдущей точке.<br />
                  <hr />
                  <b>Доступные флаги для PREMIUM:</b><br />
                  mob-spawning - Запрещает спавн мобов;<br />
                  spawn - Устанавливает место спавна: /region flag [регион] [x]
                  [y] [z];<br />
                  lava-flow - Разрешить потоки лавы;<br />
                  water-flow - Разрешить потоки воды.<br />
                  <hr />
                  * Загрузка плащей;<br />
                  * После смерти ваш накопленный опыт не пропадает;<br />
                  * Получать наборы всех привелегий;<br />
                  * Разрешено использование механических поршней;<br />
                  * Добавляет три новых набора стикеров: "Ничоси", "Паппи",
                  "Зак".<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Сервер -->

      <div class="col-4">
        <!-- Сайдбар -->
        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Общая информация:</h3>
            <p class="subtext-news">
              Дата запуска: 01.11.2020<br />
              Версия игры: 1.7.10<br />
              Последний вайп мира: 01.11.2020<br />
              PVP Режим: Включено
            </p>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Наборы ресурсов:</h3>
            <img src="../../assets/images/background/kits/vip.png" class="card-img-top" />
            <p class="subtext-news">
              <b>/kit vip - набор для VIP</b><br />
              Набор доступен только для данной привилегии 1 раз в 24 часа.
            </p>
            <div class="line-sidebar"></div>

            <img
              src="../../assets/images/background/kits/premium.png"
              class="card-img-top"
            />
            <p class="subtext-news">
              <b>/kit premium - набор для PREMIUM</b><br />
              Набор доступен только для данной привилегии 1 раз в 24 часа.
            </p>
            <div class="line-sidebar"></div>

            <img
              src="../../assets/images/background/kits/moder.png"
              class="card-img-top"
            />
            <p class="subtext-news">
              <b>/kit village - деревенский набор</b><br />
              Доступен всем за 29 эфиров.
            </p>
            <img
              src="../../assets/images/background/kits/start.png"
              class="card-img-top"
            />
            <p class="subtext-news">
              <b>/kit books - набор зачарования</b><br />
              Данный набор доступен всем за 170 эфиров.
            </p>
            <div class="line-sidebar"></div>
          </div>
        </div>

        <div class="card-block">
          <div class="card-body">
            <h3 class="text-sidebar">Новые моды для 1.7.10..</h3>
            <img src="../../assets/images/background/img4.jpg" class="card-img-top" />
            <p class="subtext-news">
              Добро пожаловать, новичок на наш сайт! В данной статье вы можете
              ознакомиться со списком горячих обновлений за "Январь" месяц...
            </p>
            <div class="d-flex">
              <p class="">
                <img
                  src="../../assets/images/icons/date.png"
                  width="16"
                  height="16"
                  style="margin-bottom: 3px;"
                />
                15 марта, 2021
              </p>
              <p style="margin-left: 30px;">
                <img
                  src="../../assets/images/icons/eyes.png"
                  width="16"
                  height="16"
                  style="margin-bottom: 3px;"
                />
                246
              </p>
              <a href="/" class="btn btn-warning button-news">Подробнее...</a>
            </div>
          </div>
        </div>
        <!-- Сайдбар -->
      </div>
    </div>
  </div>
</template>
