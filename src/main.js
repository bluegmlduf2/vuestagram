import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'

const app=createApp(App);
const emitter=mitt();
//글로벌 변수 적용부분 (axios등도 적용해주면 this.axios로 사용가능)
app.config.globalProperties.emitter=emitter;
app.mount('#app');
