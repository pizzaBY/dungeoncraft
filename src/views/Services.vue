<template>
  <cHeader/>
  <cSliderCards/>
  <cBonuses/>
  <cDonate/>
  <cFooter/>
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cSliderCards from '@/components/SliderCards.vue'
import cBonuses from '@/components/blocks/Bonuses.vue'
import cDonate from '@/components/blocks/Donate.vue'
import cFooter from '@/components/blocks/Footer.vue'

export default {
  name:"pServices",
  components:{
    cHeader,
    cSliderCards,
    cBonuses,
    cDonate,
    cFooter
  }
}
</script>