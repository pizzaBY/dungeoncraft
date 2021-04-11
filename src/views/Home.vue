<template>
 
<cHeader msg="Welcome to Your Vue.js App"/>
 <cSlider />
 <cNews />
 <cFooter/>

 
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cSlider from '@/components/Slider.vue'
import cNews from '@/components/News.vue'
import cFooter from '@/components/blocks/Footer.vue'

export default {
  name: 'pHome',
  components: {
    cHeader,
    cSlider,
    cNews,
    cFooter
  },
  data() {
    return {
      loaded: false,
    };
  },
}
</script>
