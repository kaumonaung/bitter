import axios from 'axios';

const authQueryAxios = () => {
  const authGet = axios.create();

  authGet.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');

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
