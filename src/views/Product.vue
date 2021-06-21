<template>
  <div>
    <cHeader />
    <cProduct/>
    <cFooter />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import cHeader from "@/components/Header.vue";
import cProduct from "@/components/Product.vue";
import cFooter from "@/components/blocks/Footer.vue";

export default {
  name: "pProduct",
  components: {
    cHeader,
    cProduct,
    cFooter,
  },
};
</script>
