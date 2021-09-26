<template>
    <div>
      <Post :post="elem" v-for="(elem,idx) in posts" :key="idx"/>
    </div>
</template>

<script>
import Post from './Post.vue'

export default {
    name:"Container",
    components:{
        Post:Post
    },
    props:{
        posts:Array
    }
}
</script>

<style>

</style>
