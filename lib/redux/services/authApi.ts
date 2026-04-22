import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://dev.api.skillquix.tech/api/v1';

/*

 * Auth API Service
 * 
 * This service handles all authentication-related API calls using RTK Query.
 * It automatically generates hooks for each endpoint.
 */
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, fetchBaseQuery uses application/json
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Email/Password Login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // Google Login
    googleLogin: builder.mutation({
      query: (token: string) => ({
        url: '/auth/google-login',
        method: 'POST',
        body: { token },
      }),
    }),

    // User Registration
    register: builder.mutation({
      query: (formData: FormData) => ({
        url: '/user/register',
        method: 'POST',
        body: formData,
        // FormData handles its own Content-Type with boundary
      }),
    }),

    // Forgot Password (Send OTP)
    forgotPassword: builder.mutation({
      query: (email: string) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),

    // Verify OTP
    verifyOtp: builder.mutation({
      query: ({ email, otp }: { email: string; otp: number }) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body: { email, otp },
      }),
    }),

    // Resend OTP
    resendOtp: builder.mutation({
      query: (email: string) => ({
        url: '/auth/resend-otp',
        method: 'POST',
        body: { email },
      }),
    }),

    // Reset Password
    resetPassword: builder.mutation({
      query: ({ data, token }: { data: any; token: string }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useLoginMutation,
  useGoogleLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useResetPasswordMutation,
} = authApi;
