import axios from 'axios';

const get = async (url) => {
  return axios
    .get(url)
    .then((reponse) => reponse.data)
    .catch((err) => console.log(err));
};
export default get;
