import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
// import { API_URL } from "../http";
// import axios from "axios";
// import type { AuthResponse } from "../types/AuthResponse";

export default class AuthStore {
  role = {} as string;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setRole(role: string) {
    this.role = role;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      // const response = {
      //   data: {
      //     accessToken: 'test accessToken'
      //   }
      // };
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      // localStorage.setItem('accessToken', response.data.accessToken);
      // localStorage.setItem('refreshToken', response.data.refreshToken);
      this.setAuth(true);
      this.setRole(response.data.role);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem('token');
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');
      this.setAuth(false);
      this.setRole({} as string);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  }

  // async checkAuth() {
  //   try {
  //     const response = await axios.get<AuthResponse>(`${API_URL}/auth`, {withCredentials: true});
  //     // const response = {
  //     //   data: {
  //     //     accessToken: 'test accessToken'
  //     //   }
  //     // };
  //     console.log(response);
  //     localStorage.setItem('token', response.data.accessToken);
  //     // localStorage.setItem('refreshToken', response.data.refreshToken);
  //     this.setAuth(true);
  //     this.setRole(response.data.role);
  //   } catch (e :any) {
  //     console.log(e.response?.data?.message);
  //     throw e;
  //   }
  // }
};
