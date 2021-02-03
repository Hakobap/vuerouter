<template>
  <div id="app">
    <nav>
       <ul>
        <li> <router-link exact to="/">Home</router-link> </li>
        <li> <router-link exact to="/contact">Contact</router-link> </li>
        <li> <router-link exact to="/about">About</router-link> </li>
        <li> <router-link exact to="/team">Team</router-link> </li>
        <li> <router-link exact to="/show-blogs">Show blogs</router-link> </li>
      </ul>
    </nav>
   
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li{
  display: inline-block;
  margin: 0 10px;
}


a{
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

.router-link-active{
  background: #eee;
  color: #444;
}


nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}


</style>
