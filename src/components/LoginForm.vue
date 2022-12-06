<template>
  <div id="Login">
    <div class="login">
      <div class="l_img">
        <img src="../assets/office2.jpg" alt="" class="login_img" />
      </div>

      <div class="login_detail">
        <form>
          <div class="mail mb-3">
            <label for="email" class="form-label">Email</label><br />
            <input
              type="email"
              class="form-control"
              id="email"
              autocomplete="off"
              v-model="blog.email"
              required
            />
          </div>

          <div class="password mb-3">
            <label for="password" class="form-label">Password</label><br />
            <input
              type="password"
              name="password"
              autocomplete="off"
              class="form-control"
              id="password"
              v-model.lazy="blog.password"
              required
            />
          </div>

          <div class="buttons">
            <button type="submit" class="btn2" v-on:click.prevent="submit">Login</button>
            <button type="submit" class="btn2">
              <router-link to="/">Sign-Up</router-link>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subjects", "StoreData"],
  name: "App",
  data() {
    return {
      blog: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit: function () {
      const newValue = {
        email: this.blog.email,
        password: this.blog.password,
      };
      console.log(newValue);
      this.StoreData.forEach((element) => {
        if (element.email === newValue.email) {
          console.log("enter valid email");
          if (element.password === newValue.password) {
            console.log("password  match");
            alert("Email & Password are match");

    //store value in local storage
            localStorage.setItem("logindata", JSON.stringify(this.StoreData));

    //for get value from local storage
            const storedBlogs = JSON.parse(localStorage.getItem("logindata"));
            
            console.log(storedBlogs);
            this.$router.push("/home");
          } else {
            alert("enter valid password");
          }
        } else {
          console.log("email not match");
          alert("Email & Password not match");
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
#Login {
  font-family: "Rubik", sans-serif;
  background-color: #daede9;
}
h4 {
  margin: 0px;
  color: #2a3d43;
}
select {
  background-color: #daede9;
}
a {
  text-decoration: none;
  color: white;
}
.login {
  display: flex;
  padding: 20px;
  box-shadow: 1px 0px 30px 3px #0971688c;
  width: 70%;
  margin: 60px auto;
}
.buttons {
  text-align: center;
  padding: 30px 0 0 0;
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
.login_detail {
  text-align: left;
  padding: 64px 0 0 20px;
}
.login_img {
  margin: 20% auto;
}
.l_img {
  width: 50%;
}
.register_detail {
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
