import axios from 'axios';
import config from './config';

export default class BaseAPI {
  static async getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  static async makeRequest(endpoint, method = 'GET', body = null) {
    const url = config.API_BASE_URL + endpoint;
    const headers = this.getHeaders();
    const response = await axios(url, { 
      method,
      data: body || undefined,
      headers,
    });
    return response;
  }

  static async post(endpoint, body = null) {
    return await this.makeRequest(endpoint, 'POST', body);
  }
}