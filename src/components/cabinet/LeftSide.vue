<template>
  <div class="card-block">
    <div class="row g-0">
      <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
        <!--
              <img
                src="../../assets/images/icons/profile.png"
                width="100"
                height="100"
              />
              <div class="icon-dev"></div>-->
        <div class="">
          <img
            src="../../assets/images/icons/profile.png"
            width="100"
            height="100"
            class="rounded-circle"
            v-if="this.user.user_avatar == false"
          />
          <img
            :src="'uploads/avatars/' + this.user.user_name + '.png'"
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

          <div class="pt-2 text-center">
            <input
              type="file"
              ref="fileInput"
              @change="onChangeAvatar"
              accept="image/*"
              style="display: none;"
            />
            <button
              type="button"
              @click="this.$refs.fileInput.click()"
              class="btn btn-secondary btn-block btn-main rounded-pill fw-avatar-bold"
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="name-server">
            {{ this.user.user_firstname }} {{ this.user.user_lastname }}
            <span class="badge bg-success">Online</span>
          </h5>
          <p class="sub-server">{{ this.getGroup }}</p>
          <div class="d-flex justify-content-between">
            <div class="name-server">
              {{ this.user.user_coin }}
              <img
                src="../../assets/images/icons/coin.png"
                width="24"
                height="24"
                title="Количество ваших Койнов"
              />
            </div>

            <div class="name-server">
              {{ this.user.user_efir }}
              <img
                src="../../assets/images/icons/efir.png"
                width="24"
                height="24"
                title="Количество ваших Эфиров"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between bd-highlight px-2">
        <div class="p-2 bd-highlight flex-fill">
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalclosed"
            class="btn btn-warning btn-lg button-auto w-100"
            >Проверить сообщения</a
          >
        </div>
        <div class="p-2 flex-shrink-1 bd-highlight">
          <a type="button" class="btn btn-warning btn-lg button-lock"
            ><i class="bi bi-gear"></i
          ></a>
        </div>
        <div class="p-2 flex-shrink-1 bd-highlight">
          <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalgoout"
            @click="this.getLogout()"
            class="btn btn-warning btn-lg button-lock"
            ><i class="bi bi-door-open-fill"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div class="card-block">
    <div class="row g-0">
      <div class="pt-3 col-md-4 d-flex justify-content-center align-middle">
        <img
          src="https://dungeoncraft.ru/uploads/skin.php?type=head&name=eltazaris&1616711932776"
          width="64"
          height="64"
          style="border-radius: 10px;"
        />
        <div class="icon-star"></div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="name-server">
            {{ this.user.user_name }}
            <span class="badge bg-danger">Developer</span>
          </h5>
          <p class="sub-server">Сейчас в игре: <b>----</b></p>
          <a
            id="pills-settings-tab"
            data-bs-toggle="pill"
            href="#pills-settings"
            role="tab"
            aria-controls="pills-settings"
            aria-selected="false"
            type="button"
            class="btn btn-warning btn-lg button-vote"
            >История
            <img
              src="../../assets/images/icons/shopping.png"
              width="24"
              height="24"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="card-block">
    <div class="pt-3 d-flex justify-content-center">
      <h3 class="font-weight9">Ваш персонаж:</h3>
    </div>
    <div class="pb-4 d-flex justify-content-center">
      <!-- <img
        src="../../assets/images/cabinet/skin1.png"
        width="112"
        height="224"
        alt=""
        class="skin-background"
      />
      <img
        src="../../assets/images/cabinet/skin2.png"
        width="112"
        height="224"
        alt=""
        class="skin-background ml-3"
      /> -->
      <canvas id="skin_container"></canvas>
    </div>
    <div class="d-flex justify-content-center">
      <a
        href="#"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalskin"
        class="btn btn-warning btn-lg button-cabinet"
        >Изменить скин</a
      >
    </div>
    <div class="pb-2 d-flex justify-content-center">
      <a
        href="#"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalcloack"
        class="btn btn-warning btn-lg button-cabinet"
        >Изменить плащ</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import * as skinview3d from "@/assets/js/skinview3d.bundle.js";

export default {
  name: "LeftSide",
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "user",
    ]),
    ...mapGetters(["getGroup", "getStatus", "getStatusClass"]),
  },
  mounted() {
    var skinViewer = new skinview3d.FXAASkinViewer({
      canvas: document.getElementById("skin_container"),
      alpha: false,
      width: 300,
      height: 300,
    });
    skinViewer.renderer.setClearColor(0xffffff);
    skinViewer.width = 300;
    skinViewer.height = 300;
    skinViewer.loadSkin("images/myskin.png");
    skinViewer.loadCape("images/mycape.png");
    // Control objects with your mouse!
    let control = skinview3d.createOrbitControls(skinViewer);
    control.enableRotate = true;
    control.enableZoom = false;
    control.enablePan = false;

    // Add an animation
    let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
    // Add another animation
    let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
    // Remove an animation, stop walking dude
    walk.remove();
    // Remove the rotating animation, and make the player face forward
    rotate.resetAndRemove();
    // And run for now!
    let run = skinViewer.animations.add(skinview3d.RunningAnimation);

    // Set the speed of an animation
    run.speed = 0.2;
  },
};
</script>
