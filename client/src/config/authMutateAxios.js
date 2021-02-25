import axios from 'axios';

const authMutateAxios = () => {
  const authAxios = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  });

  return authAxios;
};

export default authMutateAxios;
