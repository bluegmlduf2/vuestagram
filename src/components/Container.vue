<template>
  <div>
    <div v-if="steps == 0">
      <Post :post="elem" v-for="(elem, idx) in posts" :key="idx" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="steps == 1" >
      <div :class="filter" class="upload-image" :style="{backgroundImage:`url(${fileImageUrl})`}"></div>
      <div class="filters">
        <FilterBox v-for="(elem, idx) in filterNames" :key="idx" :filterName="elem" :fileImageUrl="fileImageUrl">
          <!-- slot문법  -->
          <template v-slot:a>필터명</template>
          <template v-slot:b>{{elem}}</template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="steps == 2">
      <div :class="filter" class="upload-image" :style="{backgroundImage:`url(${fileImageUrl})`}"></div>
      <div class="write">
        <textarea @keyup="inputComment" class="write-box" :value="content"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterNames from "/src/assets/instaFilterName.js"

export default {
  name: "Container",
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  data() {
    return {
      filterNames: filterNames
    }
  },
  props: {
    posts: Array,
    steps:Number,
    fileImageUrl:String,
    content:String,
    filter:String
  },
  methods:{
    inputComment($event){
      this.$emit('inputContent',$event.target.value)
    }
  },
};
</script>

<style>
/* 업로드,글작성화면 */
.upload-image {
  width: 100%;
  height: 450px;
  background-size: contain;
  background-repeat:no-repeat;
  background-position:center;
  background-color: #ffffff;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
