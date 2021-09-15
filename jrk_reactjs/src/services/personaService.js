import axios from 'axios';

const PERSONAS_REST_API_URL = 'http://127.0.0.1:8080/persona';

class PersonaService {
  getPersona() {
    return axios.get(PERSONAS_REST_API_URL);
  }

  createPersona(persona) {
    return axios.post(PERSONAS_REST_API_URL, persona);
  }

  getPersonaById(id) {
    return axios.get(PERSONAS_REST_API_URL + '/' + id);
  }

  deletePersona(id) {
    return axios.delete(PERSONAS_REST_API_URL + '/' + id);
  }
}

export default new PersonaService();