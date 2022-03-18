import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'www.themealdb.com/api',
});

export default Api;
