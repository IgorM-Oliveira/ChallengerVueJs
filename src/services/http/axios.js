import axios from 'axios'

const client = axios.create({
  baseURL: '/' // backend host
})

export default client
