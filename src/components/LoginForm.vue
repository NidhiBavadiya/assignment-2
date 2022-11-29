<template>
  <div id="Login">
  <div class="login">

  <div class="l_img">
     <img src="../assets/office2.jpg" alt="" class="login_img">
  </div>

  <div class="login_detail">
    <form>
       
        <div class=" mail mb-3">
            <label for="email" class="form-label">Email:-</label><br>
            <!-- <input type="email" v-validate="'email'" class="form-control" id="email"  v-model="blog.email"> -->
            <input v-validate="'required|email'" name="email" type="text" v-model="blog.email">
            <span>{{ errors.first('email') }}</span>
        </div>

          <div class="password mb-3">
              <label for="Password" class="form-label">Password:-</label><br>
              <!-- <input  v-validate="'required'" type="password" name='password'  class="form-control" id="Password" v-model.lazy="blog.Password"> -->

          <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" v-model.lazy="blog.Password" ref="password">
          <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span> 
          </div>

        <div class="buttons">
        <button type="submit" class="btn2">Submit</button>
        <button type="submit" class="btn2 "><router-link to="/signup">Sign-Up</router-link></button>
        </div>
    </form>
  </div>  
</div> 

<div> 
    <p>email:-{{blog.email}}</p>
    <p>password:-{{blog.Password}}</p> 
</div>


</div>
</template>

<script>

export default {
  props:['subjects'],
  name: 'App',
   data() {
    return {
        blog:{  
            email:'',
            Password:'',   
        },
    }
  }, 
 
  }  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
#Login{
  font-family: 'Rubik', sans-serif;
  background-color:#daede9;
}
h4{
  margin:0px;
    color: #2a3d43
}
select{
  background-color:#daede9;
}
a{
  text-decoration:none;
  color:white;
} 
.login{
    display: flex;
    padding:20px;
    box-shadow: 1px 0px 30px 3px #0971688c;
    width: 70%;
    margin: 100px auto;

}
.buttons{
  text-align:center;
      padding: 30px 0 0 0;

}
.btn2{
    border: none;
    background-color: #094f47;
    width: 70px;
    border-radius: 7px;
    height: 30px;
    color:white; 
    margin:10px;

}
.login_detail{
  text-align:left;
  padding:64px 0 0 20px;

}
.login_img{
    margin:20% auto;
}
.l_img{
  width:50%;
}
.register_detail{
  width:50%;
}
.developer{
  text-align:center;
  padding:30px 0 0 0;
  display:flex;
}
.r1{
  margin:0 0 0 10px;
}
.r_l{
  margin:0 0 0 10px;
}
.c_city{
  padding:30px 0 0 0;
  text-align:left;
}
label{
  text-align:left;
  color: #2a3d43;
}
input{
    margin: 0 0 0 50px;
    background-color: #097168;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 16px;
}
.mail,.name,.password,.c_password{
  padding:20px 0 0 0;
}
.subject{
  padding:30px 0 40px 0;
  display:flex;
}
</style>
