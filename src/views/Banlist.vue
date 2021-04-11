<template>
 <cHeader />
  <cBanlist/>
 <cFooter/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cBanlist from '@/components/Banlist.vue'
import cFooter from '@/components/blocks/Footer.vue'


export default {
  name: 'pBanlist',
  components: {
    cHeader,
    cBanlist,
    cFooter
  }
}
</script>
