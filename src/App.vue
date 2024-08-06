<script>
import HeaderNavbar from './components/layout/HeaderNavbar.vue'
import PageFooter from './components/layout/PageFooter.vue'

import { onMounted } from 'vue'
import {  
    initCarousels,
    initDropdowns, 
    } from 'flowbite'

onMounted(() => {
    initDropdowns();
    initCarousels();
})
export default {
  
  components: {
    HeaderNavbar,
     PageFooter, 
  }
}
</script>
<template>
  <HeaderNavbar />
  <router-view/>
  <PageFooter /> 

</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  a{
    text-decoration: none;
  }
}


</style>
