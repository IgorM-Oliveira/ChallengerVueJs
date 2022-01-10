import axios from 'axios'

const client = axios.create({
  baseURL: 'https://challenge-node-js.herokuapp.com/'
})

client.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

client.interceptors.response.use(undefined, error => {
  if (error.response.status === 401) {
    window.localStorage.removeItem('jwt')
  }
  return this.$router.push('/login')
})

export default client
