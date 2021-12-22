import App from '@App'
import Link from '@components/Link.vue'

export default [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: Link
  }
]
