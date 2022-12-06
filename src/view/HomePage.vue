<template>
  <div id="home">
    <h2>user details</h2>
    <table>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        <th>city</th>
        <th>gender</th>
        <th>developer</th>
      </tr>
      <tr v-for="Store in StoreData" v-bind:key="Store">
        <td>{{Store.name}}</td>
        <td>{{Store.email}}</td>
        <td>{{Store.password}}</td>
        <td><ul>
            <li v-for='cityname in city'  v-bind:key='cityname'>{{Store.cityname}}</li>
        </ul>{{Store.city}}</td>
        <td>{{Store.gender}}</td>
        <td>{{Store.developer}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["StoreData"],
  data() {
    return {

    };
  },
  methods: {
  
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
#home {
  text-align: center;
  font-family: "Rubik", sans-serif;
  background-color: #daede9;
  height: 100vh;
}
th,td{
    padding:15px;
    border-left:1px solid black;
}
h2{
    margin:0px;
}
table{
    margin:100px auto;
    box-shadow: 1px 0px 30px 3px #0971688c;

}
</style>
