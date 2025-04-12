import { TForgotPassword, TLoginFormValues, TOrder, TRegisterFormValues, TResetPasswordFormValues } from "./types";

const BASEURL = "https://norma.nomoreparties.space/api";

type TRefreshData = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
};
type TOptions = {
  headers?: { [key: string]: string };
  method?: string;
  body?: string;
};
export default class BaseService {
  static async checkResponse<T>(res: Response): Promise<T> {
    const data = await res.json();
    return res.ok ? data : Promise.reject(data);
  }
  static setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }
  static async refreshToken() {
    const res = await fetch(`${BASEURL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });
    const refreshData = await this.checkResponse<TRefreshData>(res);
    if (!refreshData.success) {
      return Promise.reject(refreshData);
    }
    this.setTokens(refreshData.accessToken, refreshData.refreshToken);
    return refreshData;
  }
  static async sendRequest(url: string, options: TOptions) {
    const fullUrl = BASEURL + url;
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: accessToken,
      };
    }
    try {
      const res = await fetch(fullUrl, options);
      return await this.checkResponse(res);
    } catch (err: unknown) {
      if (err instanceof Error && err.message === "jwt expired") {
        const refreshData = await this.refreshToken();

        options.headers = {
          ...options.headers,
          Authorization: refreshData.accessToken,
        };
        const res = await fetch(fullUrl, options);
        return await this.checkResponse(res);
      } else {
        console.error("Ошибка запроса:", err);
        throw err;
      }
    }
  }
  static getIngredients() {
    const url = "/ingredients";
    return this.sendRequest(url, {});
  }
  static sendOrder(orderData: TOrder) {
    const url = "/orders";
    return this.sendRequest(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  }
  static async register(data: TRegisterFormValues) {
    return this.sendRequest("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
  static login(data: TLoginFormValues) {
    return this.sendRequest("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
  static getUserData() {
    return this.sendRequest("/auth/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }
  static updateUserData(data: TRegisterFormValues) {
    return this.sendRequest("/auth/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
  static logout() {
    return this.sendRequest("/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });
  }
  static forgotPassword(data: TForgotPassword) {
    return this.sendRequest("/password-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
  static resetPassword(data: TResetPasswordFormValues) {
    return this.sendRequest("/password-reset/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
}
