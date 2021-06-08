import axios from 'axios'

const clientAxios = axios.create({
  baseURL: "http://localhost:4006"
})

export default clientAxios