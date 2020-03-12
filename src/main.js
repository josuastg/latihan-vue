import Vue from 'vue'
import App from './App.vue'
// import Box from '@/components/Box';

Vue.config.productionTip = false
// Vue.component('app-box', Box);

new Vue({
  render: h => h(App),
}).$mount('#app')
