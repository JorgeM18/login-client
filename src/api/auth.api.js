import BaseAPI from "./base.api";
import config from "./config";
import WebSDK from '@loginid/sdk';

const { AUTH_BASE_URL, AUTH_CLIENT_ID } = config;
const loginId = new WebSDK(AUTH_BASE_URL, AUTH_CLIENT_ID);

export default class AuthAPI extends BaseAPI {
  static baseEndpoint = '';

  static async genAuthToken(username, action) {
    const response = await this.post(`${this.baseEndpoint}/token`, { username, action });
    return response.data.auth_token;
  }

  static async registerWithLoginID(username) {
    const auth_token = await this.genAuthToken(username, 'register');
    return await loginId.registerWithFido2(username, {
      authorization_token: auth_token
    });
  }

  static async authenticateWithLoginID(username) {
    const auth_token = await this.genAuthToken(username, 'login');
    return await loginId.authenticateWithFido2(username, {
      authorization_token: auth_token
    });
  }
} 