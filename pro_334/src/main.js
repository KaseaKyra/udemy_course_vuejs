import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

// global axios
// axios.defaults.baseURL = 'https://vue-axios-94c42.firebaseio.com'

// const reqIn =  axios.interceptors.request.use(config => {
//   console.log('request', config);
//   return config;
// });
//
// const resIn =  axios.interceptors.response.use(res => {
//   console.log('Interceptor response', res);
//   return res;
// });
//
// axios.interceptors.request.eject(reqIn); // huy req
// axios.interceptors.response.eject(resIn);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
