<template>
<!-- 기존 css + 변수로 css추가 or :class="변수명"-->
    <div :class="filterName+' filter-item'" :style="{backgroundImage:`url(${fileImageUrl})`}">
      <span class="filterName">
          <!-- slot문법  -->
          <slot name="a"></slot><br>
          <slot name="b"></slot>
      </span>
    </div> 
</template>

<script>
export default {
    name:"FilterBox",
    props:{
        fileImageUrl:String,
        filterName:String
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
.filterName{
    font: 200;
    color:cadetblue;
}
</style>