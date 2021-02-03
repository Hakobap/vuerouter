<template>
    <div class="blog">
        <div class="blog-container" v-for="blog in blogs" v-bind:key="blog.id">
            <router-link v-bind:to="'show-blogs/'+blog.id">
                <h4>{{ blog.title }}</h4>
                <p>{{ blog.body }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            blogs:[]
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.blogs = res.data.slice(0, 10)
            console.log(this.blogs)
            // npm install core-js
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style scoped>
h4{
    text-align: center;
}
.blog-container{
    width: 700px;
    height: auto;
    margin: 10px auto;
    border: 2px solid black;
    background-color: #ccc;
    padding: 15px;
}
.blog-container>p{
    font-size: 16px;
}
</style>