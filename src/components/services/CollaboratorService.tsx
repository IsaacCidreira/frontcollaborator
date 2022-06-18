import { HttpClient } from './utils/HttpClient';

class CollaboratorService {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient('https://collaboratorbackend.herokuapp.com/');
  }
  async listCollaborator() {
    return this.httpClient.get('/collaborator');
  }

  async listCollaboratorOne(id: string) {
    return this.httpClient.get(`collaborator/${id}`);
  }

  async deleteCollaboratorOne(id: string) {
    return this.httpClient.delete(`https://collaboratorbackend.herokuapp.com/collaborator/${id}`);
  }

  async postCollaborator(
    name: string,
    cargo: string,
    telefone: string,
    url: string,
  ) {
    return this.httpClient.post('https://collaboratorbackend.herokuapp.com/', {
      name: name,
      cargo: cargo,
      telefone: telefone,
      url: url,
    });
  }

  async puttCollaborator(
    id: string,
    name: string,
    cargo: string,
    telefone: string,
    url: string,
  ) {
    return this.httpClient.put(`https://collaboratorbackend.herokuapp.com/${id}`, {
      name: name,
      cargo: cargo,
      telefone: telefone,
      url: url,
    });
  }
}

export default new CollaboratorService();
