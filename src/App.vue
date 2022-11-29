<template>
  <div id="app">
  <router-view v-bind:subjects="subjects"></router-view>
  <!-- <loginform></loginform> -->
    
  </div>
</template>

<script>


// import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  //  components:{
  //   'loginform':LoginForm,
  //  }
  data() {
    return {
       subjects:['c++','java','html','rect']
    }
  },

}
</script>

<style>

</style>
