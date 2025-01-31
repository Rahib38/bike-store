import { baseApi } from "@/Redux/Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/admin/user",
        method: "GET",
      }),
    }),
    updateUsers: builder.query({
      query: (id) => ({
        url: `/admin/user/${id}/block`,
        method: "GET",
      }),
    }),
  }),
});
export const { useAllUsersQuery,useUpdateUsersQuery } = userApi;
