import VueRouter from 'vue-router'
import routes from '@services/routes'
// import { store } from '../../store/store'

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
