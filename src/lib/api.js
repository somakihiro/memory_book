import axios 'axios'
import _ from 'lodash'

const api = axios.create({
  baseURL: 'http://localhost:3100'
})

api.interceptors.request.use((config) => {
  config.data = _.snakecaseKeys(config.data)
  return config
})

api.interceptors.request.use((res) => {
  res.data = _.camelcaseKeys(res.data)
  res.headers = _.camelcaseKeys(res.headers)
  return res
})

export default api
