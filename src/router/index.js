import Vue from 'vue'
import VueRouter from 'vue-router'
import router_config from './router-config'

Vue.use(VueRouter)

const router = new VueRouter(router_config)

export default router
