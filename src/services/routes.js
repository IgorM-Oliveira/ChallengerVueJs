import App from '@App'
import HelloWorld from '@components/HelloWorld.vue'

export default [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  }
]
