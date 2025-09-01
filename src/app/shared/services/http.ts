export const http = {
  url: location.origin,

  async get(endpoint: string, headers = {}) {
    return await fetch(`${this.url}${endpoint}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", ...headers },
    }).then(this.handleResponse);
  },

  async post(endpoint: string, data = {}, headers = {}) {
    return await fetch(`${this.url}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    }).then(this.handleResponse);
  },

  async put(endpoint: string, data = {}, headers = {}) {
    return await fetch(`${this.url}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    }).then(this.handleResponse);
  },

  async delete(endpoint: string, headers = {}) {
    return await fetch(`${this.url}${endpoint}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", ...headers },
    }).then(this.handleResponse);
  },

  async handleResponse(response: any) {
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Unknown error" }));
      throw new Error(error.message || "Unknown error");
    }
    return response.json();
  },
};