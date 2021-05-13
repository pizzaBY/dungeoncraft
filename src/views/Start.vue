<template>
  <div>
    <cHeader />
    <cStart />
    <cFooter />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import cHeader from "@/components/Header.vue";
import cStart from "@/components/Start.vue";
import cFooter from "@/components/blocks/Footer.vue";

export default {
  name: "pStart",
  components: {
    cHeader,
    cStart,
    cFooter,
  },
};
</script>
