<template>
  <div>
    <cHeader />
    <cCabinet />
    <cFooter />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import cHeader from "@/components/Header.vue";
import cCabinet from "@/components/Cabinet.vue";
import cFooter from "@/components/blocks/Footer.vue";

export default {
  name: "pCabinet",
  components: {
    cHeader,
    cCabinet,
    cFooter,
  },
};
</script>
