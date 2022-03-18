import Api from './api';

export default async (url) => {
  try {
    const response = await Api.get(url);

    if (response.status === 200) {
      return response;
    }

    return 'ERRO';
  } catch (error) {
    return error.response;
  }
};
