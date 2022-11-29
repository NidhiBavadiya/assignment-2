<template>
  <div id="signup">
  <div class="register">

  <div class="r_img">
     <img src="../assets/office2.jpg" alt="" class="login_img">
  </div>

  <div class="register_detail">
    <form>
        <div class="name mb-3">
            <label for="name" class="form-label">name:-</label> <br>
            <input  v-validate="'required'" type="text"  class="form-control" id="name" v-model.lazy="blog.name" >
        </div>
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


            <div class="c_password mb-3">
               <label for="Password1" class="form-label">conform Password:-</label><br>
              <!--<input type="password" class="form-control" id="Password1" v-model.lazy="blog.conform_p"> -->

              <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}"  
             data-vv-as="password">
            <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
          </div>

        

        <div class="developer">
        <h4>developer:-</h4>
            <input type="radio" class="r1" id="front" name="fav_language" value="" v-model="blog.developer">
            <label for="front" class="r_l">Fronted</label><br>
            <input type="radio" class="r1"  id="back" name="fav_language" value="" v-model="blog.developer">
            <label for="back" class="r_l">backend</label><br>
        </div>

        <div class="c_city">
        <h4>city:-</h4>
        <input type="checkbox" id="check1" name="check1" value="Ahmedabad" v-model="blog.city">  
        <label for="check1">Ahmedabad</label><br>
         <input type="checkbox" id="check2" name="check2" value="surat" v-model="blog.city"> 
        <label for="check2">surat</label><br>
         <input type="checkbox" id="check3" name="check3" value="rajkot" v-model="blog.city"> 
        <label for="check3">rajkot</label><br>
         <input type="checkbox" id="check4" name="check4" value="baroda" v-model="blog.city"> 
        <label for="check4">baroda</label><br>
        </div>

        <div class="subject">
          <h4>select subject:-</h4>
            <select v-model="blog.subject">
                <option v-for="subject in subjects" v-bind:key='subject'>{{subject}}</option>
            </select>  
        </div>

        <div class="buttons">
        <button type="submit" class="btn2">Submit</button>
        <button type="submit" class="btn2 "><router-link to="/">Login</router-link></button>
        </div>
    </form>
  </div>  
</div> 

<div>
    <p>name:-{{blog.name}}</p>
    <p>email:-{{blog.email}}</p>
    <p>password:-{{blog.Password}}</p>
    <!-- <p>conform password:-{{blog.conform_p}}</p> -->
    <p>developer:-{{blog.developer}}</p>
    <p>city:-</p>
     <ul>
            <li  v-for="cities in blog.city" v-bind:key="cities">{{cities}}</li>
         </ul>
    <p>subject:-{{blog.subject}}</p>
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
            name:'',
            email:'',
            Password:'',
            conform_p:'',
            city:'',
            developer:'',
            subject:''
        },
        // subjects:['c++','java','html','rect']
    
    }
  }, 
 
  }  

</script>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
#signup{
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
.register{
    display: flex;
    padding:20px;
    box-shadow: 1px 0px 30px 3px #0971688c;
    width: 70%;
    margin: 100px auto;

}
.buttons{
  text-align:center;
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
.register_detail{
  text-align:left;
  padding:0 0 0 20px;

}
.login_img{
    margin:50% auto;
}
.r_img{
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
