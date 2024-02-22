import axios from "axios";

import errorResponseHandler from './errorResponseHandler'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});
instance.defaults.headers.common['ngrok-skip-browser-warning'] = 'headers-server-staycation';
instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
