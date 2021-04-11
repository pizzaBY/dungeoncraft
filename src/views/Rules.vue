<template>
 <cHeader />
 <cSliderRules />
  <cRulesBlock/>
 <cFooter/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cSliderRules from '@/components/SliderRules.vue'
import cFooter from '@/components/blocks/Footer.vue'
import cRulesBlock from '@/components/blocks/Rules.vue'


export default {
  name: 'pRules',
  components: {
    cHeader,
    cSliderRules,
    cRulesBlock,
    cFooter
  }
}
</script>
