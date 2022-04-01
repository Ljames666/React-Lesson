import axios from 'axios';

export default async (url) => {
  return axios
    .get(url)
    .then((reponse) => reponse.data)
    .catch((err) => console.log(err));
};
