import { baseApi } from "@/Redux/Api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userAllOrders: builder.query({
      query: () => ({
          url: `/orders/userAllOrders`,
          method: "GET",
      }),
  }),
  adminAllOrders: builder.query({
      query: () => ({
          url: `/orders/adminAllOrders`,
          method: "GET",
      }),
  }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),

    getOrder: builder.mutation({
      query: (id) => ({
          url: `/orders/verify?order_id=${id}`,
          method: "PATCH",
      }),
  }),
  }),
});
export const {useCreateOrderMutation,useAdminAllOrdersQuery,useUserAllOrdersQuery,useGetOrderMutation}=orderApi