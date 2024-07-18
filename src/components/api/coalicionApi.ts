import axios, { AxiosRequestConfig } from "axios";

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers: any; // Ajusta el tipo según tus necesidades
}

// Credenciales de autenticación
const username = "coalition";
const password = "skills-test";

// Codifica las credenciales en Base64 usando btoa
const encodedCredentials = btoa(`${username}:${password}`);

// Crea una instancia de Axios
export const cApi = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
});

// Interceptor para configurar el encabezado de autorización
cApi.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    // Añade el encabezado de autorización aquí usando las credenciales codificadas
    config.headers = {
      ...config.headers,
      Authorization: `Basic ${encodedCredentials}`,
    };

    return config;
  }
);

export default cApi;
