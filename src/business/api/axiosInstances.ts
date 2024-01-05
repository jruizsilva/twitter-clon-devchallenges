import axios from "axios";

// Define la URL base predeterminada
let baseURL = 'http://localhost:8080';

// Verifica si estás en un entorno de producción
if (process.env.NODE_ENV === 'production') {
  // Asigna la URL base para el entorno de producción
  baseURL = 'https://clonapp.onrender.com';
}

const publicInstance = axios.create({
  baseURL
});
const protectedInstance = axios.create({
  baseURL,
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