import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Team from './components/Team.vue'
import ShowBlogs from './components/Showblogs.vue'
import SingleBlog from './components/SingleBlog.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/', component:Home},
  {path:'/about', component:About},
  {path:'/contact', component:Contact},
  {path:'/team', component:Team},
  {path:'/show-blogs', component:ShowBlogs},
  {path:'/show-blogs/:id', component:SingleBlog},
]

const router = new VueRouter({
  routes:routes,
  mode:'history'// removing #
})


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
