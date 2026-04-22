import axios from 'axios';

const API_BASE_URL = 'https://dev.api.skillquix.tech/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(config => {
  console.log('API Request:', config.method?.toUpperCase(), config.url, config.data);
  return config;
});

// Add response interceptor for debugging
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export const authApi = {
  googleLogin: (token: string) => api.post('/auth/google-login', { token }),
  register: (formData: FormData) => api.post('/user/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  login: (credentials: any) => api.post('/auth/login', credentials),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  verifyOtp: (email: string, otp: number) => api.post('/auth/verify-otp', { email, otp }),
  resendOtp: (email: string) => api.post('/auth/resend-otp', { email }),
  resetPassword: (data: any, token: string) => api.post('/auth/reset-password', data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }),
};
