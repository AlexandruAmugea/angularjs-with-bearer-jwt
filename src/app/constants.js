let BASE_URL = 'https://nodejs-jwt-rest-api.herokuapp.com/api';
BASE_URL = 'http://localhost:3000/api';

const PROPERTIES = {
  signin: `${BASE_URL}/signin`,
  signup: `${BASE_URL}/signup`,
  getArticles: `${BASE_URL}/article`,
  newArticle: `${BASE_URL}/article`,
  removeArticle: `${BASE_URL}/article/remove`,
  verifyUserToken: `${BASE_URL}/verify-user`
};

export default PROPERTIES;
