import { baseApi } from "@/Redux/Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    user: builder.query({
      query: (id) => ({
        url: `/auth/user/${id}`,
        method: "GET",
      }),
    }),
    register: builder.mutation({
      query: (info) => ({
        url: "/auth/register",
        method: "POST",
        body: info,
      }),
    }),
    login: builder.mutation({
      query: (info) => ({
        url: "/auth/login",
        method: "POST",
        body: info,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
    userUpdate: builder.mutation({
      
      query: (data) => (
        console.log("upda",data),
        {
        url: `/auth/user/updateProfile`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUserQuery,
  useUpdatePasswordMutation,
  useUserUpdateMutation,
} = authApi;
