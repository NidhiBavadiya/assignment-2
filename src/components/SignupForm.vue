<template>
  <div id="signup">
    <div class="Sign">
      <div class="r_img">
        <img src="../assets/office2.jpg" alt="" class="login_img" />
      </div>

      <div class="register_detail">
        <form v-on:submit.prevent="Storevalue">
          <div class="name mb-3">
            <label for="name" class="form-label">name</label> <br />
            <input
              type="text"
              v-validate="'required'"
              class="form-control"
              name="name"
              id="name"
              v-model.lazy="blog.name"
             required>
          </div>

         <div class="mail mb-3">
            <label for="email" class="form-label">Email</label><br />
            <input
              type="email"
              v-validate="'required'"
              class="form-control"
              id="email"
              name="email"
              autocomplete="off"
              v-model="blog.email"
              required
            />
          </div>

          <div class="password mb-3">
            <label for="Password" class="form-label">Password</label><br />
            <input
              v-validate="'required'"
              name="password"
              type="password"
              :class="{ 'is-danger': errors.has('password') }"
              v-model.lazy="blog.password"
              ref="password"
            />
            <span v-show="errors.has('password')" class="help is-danger">{{
              errors.first("password")
            }}</span>
          </div>

          <div class="c_password mb-3">
            <label for="Password1" class="form-label">confirm Password</label><br />
            <input
              v-validate="'required|confirmed:password'"
              name="password_confirmation"
              type="password"
              :class="{ 'is-danger': errors.has('password_confirmation') }"
              data-vv-as="password"
              v-model.lazy="blog.conform_p"
            />
            <span v-show="errors.has('password_confirmation')" class="help is-danger">{{
              errors.first("password_confirmation")
            }}</span>
          </div>

          <div class="developer">
            <h4>Gender</h4>
            <input
              type="radio"
              class="r1"
              id="front"
              name="developer"
              value="male"
              v-model="blog.gender"
              required
            />
            <label for="front" class="r_l">male</label><br />
            <input
              type="radio"
              class="r1"
              id="back"
              name="developer"
              value="female"
              v-model="blog.gender"
              required
            />
            <label for="back" class="r_l">female</label><br />
          </div>

          <div class="c_city">
            <h4>city</h4>
            <input type="checkbox" id='c_1' name="check1" value="Ahmedabad" v-model="blog.city"  />
            <label for='c_1'>Ahmedabad</label><br />
            <input type="checkbox" id='c_2' name="check2" value="surat" v-model="blog.city"    />
            <label for='c_2'>surat</label><br />
            <input type="checkbox" id='c_3' name="check3" value="rajkot" v-model="blog.city" />
            <label for='c_3'>rajkot</label><br />
            <input type="checkbox" id='c_4' name="check4" value="baroda" v-model="blog.city" />
            <label for='c_4'>baroda</label><br />
          </div>

          <div class="subject">
            <h4>select subject</h4>
            <select v-model="blog.developer"    required>
              <option v-for="developer in developers" v-bind:key="developer">
                {{ developer }}
              </option>
            </select>
          </div>

          <div class="buttons">
            <button type="submit" class="btn2">
              Submit
            </button>
        
            <!-- <button type="submit" class="btn2"><router-link to ='/login'>Login</router-link></button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["developers", "StoreData"],
  name: "App",
  data() {
    return {
      blog: {
        name: "",
        email: "",
        password: "",
        conform_p: "",
        city: [],
        gender: "",
        developer: "",
      },
    };
  },
  methods: {
    Storevalue: function () {
      let newArray = {
        name: this.blog.name,
        email: this.blog.email,
        password: this.blog.password,
        conform_p: this.blog.conform_p,
        city: this.blog.city,
        gender: this.blog.gender,
        developer: this.blog.developer,
      };
      console.log(newArray);
      this.StoreData.push(newArray);
      console.log(this.StoreData);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
#signup {
  font-family: "Rubik", sans-serif;
  background-color: #daede9;
}
h4 {
  margin: 0px;
  color: #2a3d43;
}
select {
  background-color: #daede9;
  margin: 0 0 0 20px;
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: white;
}
.Sign {
  display: flex;
  padding: 20px;
  box-shadow: 1px 0px 30px 3px #0971688c;
  width: 70%;
  margin: 60px auto;
}
.buttons {
  text-align: center;
}
.btn2 {
  border: none;
  background-color: #094f47;
  width: 70px;
  border-radius: 7px;
  height: 30px;
  color: white;
  margin: 10px;
}
.register_detail {
  text-align: left;
  padding: 0 0 0 20px;
  width: 50%;
}
.login_img {
  margin: 50% auto;
}
.r_img {
  width: 50%;
}
.developer {
  text-align: center;
  padding: 30px 0 0 0;
  display: flex;
}
.r1 {
  margin: 0 0 0 10px;
}
.r_l {
  margin: 0 0 0 10px;
}
.c_city {
  padding: 30px 0 0 0;
  text-align: left;
}
label {
  text-align: left;
  color: #2a3d43;
  font-size: 14px;
}
input {
  margin: 0 0 0 50px;
  background-color: #097168;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 16px;
}
.mail,
.name,
.password,
.c_password {
  padding: 20px 0 0 0;
}
.subject {
  padding: 30px 0 40px 0;
  display: flex;
}
</style>
