import axios from "axios";
import { BASE_API_URL } from "../../utils/config";

export interface LoginData {
    email: string;
    password: string;
}

export interface serverResponse {
    status: number,
    message: any
}

export const loginApi = async (data: LoginData) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/api/auth/login`, data, {
        withCredentials: true,
      });
      return {
        status: response.status,
        message: response.data,
      } as serverResponse;
    } catch (error: any) {
      if (error.response) {
        // Return the status and message from the error response
        return {
          status: error.response.status,
          message: error.response.data || 'An error occurred.',
        } as serverResponse;
      } else {
        // Handle other types of errors (network errors, etc.)
        return {
          status: 500,
          message: 'An unexpected error occurred.',
        } as serverResponse;
      }
    }
};