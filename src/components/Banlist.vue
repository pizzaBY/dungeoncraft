<template>
    <div class="container" data-aos="fade-up">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active justify-content-center">
                    <div style="position: absolute;margin-left: 440px; margin-top: 120px;" class="box bounce-2 ">
                        <img src="../assets/images/background/logo-banlist.png" class="" width="470" height="311">
                    </div>
                        <img src="../assets/images/background/img-banlist.png" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>

        <div class="card-guild">
        <table class="table align-middle table-text">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Игровое имя:</th>
                <th scope="col">Причина:</th>
                <th scope="col">Заблокировал:</th>
                <th scope="col">Время:</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="padding-left: 35px;" scope="row"><img src="../assets/images/icons/numbers/1.png" width="24" height="24"></th>
                <td><img style="padding: 10px; border-radius: 45px;" src="https://dungeoncraft.ru/uploads/skin.php?type=head&name=XDFGH&1615910101" alt="" class="">ErmocDMC</td>
                <td>Правила: 3.3</td>
                <td>eltazaris</td>
                <td>до 15.04.2022</td>
                <td><a href="/" class="btn btn-warning button1-guild">Подробнее...</a></td>
              </tr>
              <tr>
                <th style="padding-left: 35px;" scope="row"><img src="../assets/images/icons/numbers/2.png" width="24" height="24"></th>
                <td><img style="padding: 10px; border-radius: 45px;" src="https://dungeoncraft.ru/uploads/skin.php?type=head&name=PingWin01y&1615910101" alt="" class="">BloodWolf</td>
                <td>Правила: 2.3</td>
                <td>pizza</td>
                <td>до 15.04.2022</td>
                <td><a href="/" class="btn btn-warning button1-guild">Подробнее...</a></td>
              </tr>
              <tr>
                <th style="padding-left: 35px;" scope="row"><img src="../assets/images/icons/numbers/3.png" width="24" height="24"></th>
                <td><img style="padding: 10px; border-radius: 45px;" src="https://dungeoncraft.ru/uploads/skin.php?type=head&name=ErmocDML&1615910153" alt="" class="">erik24</td>
                <td>Правила: 6.3</td>
                <td>Lonely_Wolf</td>
                <td>до 15.04.2022</td>
                <td><a href="/" class="btn btn-warning button1-guild">Подробнее...</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card-block mb-3">
            <div class="card-pagination"></div>
            <nav aria-label="...">
                <ul class="pagination pagination-lg d-flex justify-content-center bd-highlight">
                    <li class="page-item disabled">
                        <a class="page-link icon-left" href="#" tabindex="-1" aria-disabled="true"></a>
                    </li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">
                            1
                            <span class="sr-only">(current)</span>
                        </span>
                    </li>
                    <li class="page-item disabled ml-4">
                        <a class="page-link icon-right" href="#" tabindex="-1" aria-disabled="true"></a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    name:"cBanlist"
}
</script>