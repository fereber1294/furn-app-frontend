import axios from 'axios'

const clientAxios = axios.create({
  baseURL: process.env.BASE_URL
})

export default clientAxios