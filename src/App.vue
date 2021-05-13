<template>
  <router-view v-slot="{ Component }">
   
    <transition name="custom-classes-transition" >
      <component :is="Component" />
    </transition>
  </router-view>

  <cModals />
</template>

<script>
import cModals from "@/components/Modals.vue";

import { mapActions } from "vuex";

export default {
  components: {
    cModals,
  },
  created() {
    this.checkLogin();
  },
  beforeMount() {
    this.getMonitoring();
    setInterval(() => {
      this.getMonitoring();
    }, 10000);
  },
  methods: {
    ...mapActions([
      "checkLogin",
      "getMonitoring", // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
  },
};
</script>
<style></style>
