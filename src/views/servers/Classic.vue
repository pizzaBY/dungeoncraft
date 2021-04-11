<template>
 <cHeader />
 <cServer />
 <cFooter/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
</template>

<script>
// @ is an alias to /src
import cHeader from '@/components/Header.vue'
import cServer from '@/components/server/Classic.vue'
import cFooter from '@/components/blocks/Footer.vue'

export default {
  name: 'pClassic',
  components: {
    cHeader,
    cServer,
    cFooter
  }
}
</script>
