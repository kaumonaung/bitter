import axios from 'axios';

const authMutateAxios = () => {
  const authAxios = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

  authAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        token: token,
      };
    }

    return config;
  });

  return authAxios;
};

export default authMutateAxios;
