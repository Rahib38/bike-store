import { baseApi } from "@/Redux/Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
    }),
    deactiveUsers: builder.mutation({
      query: (id) => ({
        url: `/admin/users/${id}/block`,
        method: "PATCH",
      }),
    }),
  }),
});
export const { useAllUsersQuery,useDeactiveUsersMutation } = userApi;
