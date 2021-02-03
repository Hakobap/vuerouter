<template>
    <div>
        <h1>Single Blog</h1>
        <div class="red">
            <h4>{{blog.title}}</h4>
            <p>{{blog.body}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           id:this.$route.params.id,
           blog:{} 
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(res=>{
            this.blog = res.data
        }).catch(err=>{
            console.log(err)
        })
    }
   
}
</script>

<style scoped>
h4, h1{
    text-align: center;
}
.red{
    background-color: black;
    color: chartreuse;
    border: 2px solid chartreuse;
}
</style>