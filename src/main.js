import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bar from './Bar.vue'
import Center from './Center.vue'




Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Center },
      { path: '/bar', component: Bar }
    ]
  }),
  render: h => h(App)
}).$mount('#app')
