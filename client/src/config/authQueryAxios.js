import axios from 'axios';

const authQueryAxios = () => {
  const authGet = axios.create();

  authGet.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        token: token,
      };
    }

    return config;
  });

  return authGet;
};

export default authQueryAxios;
