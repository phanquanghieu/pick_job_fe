import axios from 'axios'
import qs from 'qs'
import local from './local'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

api.interceptors.request.use(
  (config: any) => {
    console.log(config.headers['Content-Type'])
    config.headers = {
      Authorization: `Bearer ${local.getJwtToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    config.paramsSerializer = (params: any) =>
      qs.stringify(params, { encode: false })
    return config
  },
  (error) => {
    console.error(error)
  }
)

api.interceptors.response.use(
  (response) => response.data,
  (error, ...rest) => {
    if (error?.response?.status === 401) {
      local.clear()
      window.location.reload()
    }
    console.error(error)
    return error.response.data
  }
)

export default api
