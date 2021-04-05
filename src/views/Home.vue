<template>
 <cHeader msg="Welcome to Your Vue.js App"/>
 <cSlider />
 <cNews />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cSlider from '@/components/Slider.vue'
import cNews from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    cHeader,
    cSlider,
    cNews
  }
}
</script>
