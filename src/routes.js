import login from './view/LoginPage.vue'
import Signup from './view/SignupPage.vue'
import HomePage from './view/HomePage.vue'

export default [
    { path: '/', component:Signup},
    { path: '/login', component:login},
    { path: '/home', component:HomePage},
   
]