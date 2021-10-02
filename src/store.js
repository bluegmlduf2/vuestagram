import { createStore } from 'vuex'

const store = createStore({
// 데이터 저장하는곳
  state(){
    return {
      like:0,
      selectedLike:false
    }
  },
// 데이터 변경하는곳 (디버깅등을 염두해서 데이터 변경을 한곳에서 처리)
  mutations:{
    addLike(state){
        state.like++;
        state.selectedLike=true;
    },
    removeLike(state){
        state.like--;
        state.selectedLike=false;
    }
  }
})

export default store