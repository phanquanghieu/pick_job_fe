import axios from 'axios'
import qs from 'qs'
import local from './local'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

api.interceptors.request.use(
  (config: any) => {
    const token = local.getJwtToken()
    config.headers = {
      Authorization: token ? `Bearer ${local.getJwtToken()}` : null,
      Accept: 'application/json',
      'Content-Type': config.headers['Content-Type'] ?? 'application/json',
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
      // window.location.replace('/login')
    }
    console.error(error)
    return error.response.data
  }
)

export default api
