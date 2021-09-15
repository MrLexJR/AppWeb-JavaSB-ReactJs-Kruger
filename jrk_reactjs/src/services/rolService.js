import axios from 'axios';

const ROLES_REST_API_URL = 'http://127.0.0.1:8080/rol';

class RolService{
  getRoles(){
    return axios.get(ROLES_REST_API_URL);
  }
}

export default new RolService();