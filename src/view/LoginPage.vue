<template>
  <div id="login">
    <div>
      <h2>Login</h2>
    </div>
    <loginform :StoreData="StoreData"></loginform>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  props: ["StoreData"],
  name: "App",
  components: {
    loginform: LoginForm,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
#login {
  text-align: center;
  font-family: "Rubik", sans-serif;
  background-color: #daede9;
  height: 100vh;
}
a {
  text-decoration: none;
  color: white;
}
.btn1 {
  border: none;
  background-color: #094f47;
  width: 70px;
  border-radius: 7px;
  height: 30px;
}
h2 {
  padding: 50px 0 0 0;
}
</style>
