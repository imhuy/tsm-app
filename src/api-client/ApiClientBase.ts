import { BASE_URL } from "@/utils/config";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiClientBase {
  protected instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 50000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  private handleResponse = (res: AxiosResponse) => {
    return res.data;
  };

  protected handleError = (err: any) => {
    if (err?.response) {
      if (err?.response?.status == 401) {
        localStorage.removeItem("AQToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  };

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }
}

export default ApiClientBase;
