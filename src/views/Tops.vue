<template>
  <div>
    <cHeader />
    <cSliderTops />
    <cTops />
    <cFooter />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import cHeader from "@/components/Header.vue";
import cSliderTops from "@/components/SliderTops.vue";
import cTops from "@/components/Tops.vue";
import cFooter from "@/components/blocks/Footer.vue";

export default {
  name: "pTops",
  components: {
    cHeader,
    cTops,
    cSliderTops,
    cFooter,
  },
};
</script>
