<template>
    <div id="add-blog">
        <h1>Add New Blog</h1>
        <div v-if="submitted">
            <h3 style="color:green">Thanks For Adding Post</h3>
        </div>
        <form>
            <label>Blog Title</label>
            <input type="text" v-model="blog.title" placeholder="title">
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blog:{
                title:"",
                content:"",
                categories:[],
                author:""
            },
            submitted:false,
            authors:['ReactJS', 'AngularJS', 'VueJS', 'NodeJs']
        }
    }
}
</script>
<style scoped>

</style>