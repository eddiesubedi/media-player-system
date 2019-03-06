import Vue from 'vue';
import Tooltip from 'vue-directive-tooltip';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Tooltip, {
  delay: 0,
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
