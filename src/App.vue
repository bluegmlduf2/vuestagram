<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
    </div>

    <Container :posts="posts" :steps="steps" :fileImageUrl="fileImageUrl"/>
    
    <button class="btn btn-light center" @click="showMore">더보기</button>
    
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="uploadImage" type="file" id="file" class="inputfile" accept="image/*"/>
        <label for="file" class="input-plus">+</label>
      </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import posts from './assets/posts'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container:Container
  },
  data() {
    return {
      posts:posts,
      showMoreCnt:0,
      steps:1,
      fileImageUrl:''
    }
  },methods:{
        showMore(){
            axios.get(`https://codingapple1.github.io/vue/more${this.showMoreCnt}.json`).then((result)=>{
                this.posts.push(result.data)
                this.showMoreCnt+=1
            }).catch((err)=>{
                alert('게시물이 더이상 없습니다.')
                console.log(err)
            })
        },
        uploadImage(e){
          const file=e.target.files[0];
          this.fileImageUrl=URL.createObjectURL(file)//1.BLOB은 image파일의 binary객체 (이동용기) 2.createObjectURL는 이미지의 url을 임시로만들어줌
        }
    }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 45px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;/** fixed와의 차이 : 지정한 top에 오면 고정됨 */
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  margin-top:10px;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
.center{
/* relative:현재엘리멘트기준 absolute:부모의위치(relative,static등..)기준 */
position: relative;
left: 50%;
top: 25px;
transform: translate(-50%,-50%);
}
</style>
