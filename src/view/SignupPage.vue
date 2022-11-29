<template>
  <div id="register">
   <div>
    <h3>Sign-up</h3>
    <button type="button" class="btn1"><router-link to="/">login</router-link></button> 
  </div>
   <signupform v-bind:subjects="subjects"></signupform>

    
  </div>
</template>

<script>

import  SignupForm  from '../components/SignupForm.vue'

export default {
  props:['subjects'],
  name: 'App',
  components:{
    'signupform':SignupForm,
}  

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
#register{
   text-align:center;
   font-family: 'Rubik', sans-serif;
   background-color:#daede9
}
a{
  text-decoration:none;
  color:white;
}
.btn1{
    border: none;
    background-color: #094f47;
    width: 70px;
    border-radius: 7px;
    height: 30px;
}
h3{
  padding:50px 0 0 0;
}
</style>
