interface IBody {
  name: string;
  cargo: string;
  telefone: string;
  url: string;
}
class HttpClient {
  constructor(private baseUrl: string) {}
  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);
    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(body);
  }

  async post(url: string, body: IBody) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async delete(url: string) {
    const response = await fetch(url, {
      method: 'DELETE',
    });
  }

  async put(url: string, body: IBody) {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export { HttpClient };
