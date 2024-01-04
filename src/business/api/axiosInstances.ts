import axios from "axios";

const publicInstance = axios.create({
  baseURL: 'http://localhost:8080'
});
const protectedInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

protectedInstance.interceptors.request.use(
  function (config) {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    if (AUTH_TOKEN === null) {
      throw new Error('Token expired')
    }

    config.headers.Authorization = 'Bearer ' + AUTH_TOKEN

    // Haz algo antes que la petición se ha enviada
    return config
  },
  async function (error) {
    // Haz algo con el error de la petición
    return await Promise.reject(error)
  }
)

export { publicInstance, protectedInstance }