import { Tuser } from "@/components/ProfileDropDown";
import { useCreateOrderMutation } from "@/Redux/Features/Admin/OrderApi";
import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Helmet } from "react-helmet";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Checkout = () => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }
  // console.log(user)
  const { data: singleData } = useUserQuery(user?._id);
  // console.log(singleData)
  const [orderProduct]=useCreateOrderMutation()
  // console.log(orderProduct)

  const { carts } = useAppSelector((state) => state?.product);
  const {
    register,
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await orderProduct(data) ;
      console.log(result,"dkfkd")
      if (result.error) {
        toast.error("Failed to order");
      } else {
        toast.success("order successfully", { duration: 2000 });
        reset();
      }
      console.log(result, "addProduct");
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );



  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>RideOn Wheels | Checkout</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-600 text-center mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Billing Details
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={singleData?.data?.name}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Name"
                  {...register('name')}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={singleData?.data?.email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Email"
                  {...register('email')}

                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={singleData?.data?.address}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={singleData?.data?.phone}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <button
                className="mt-6 w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {carts.map((item) => (
                <div
                  key={item?._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="text-lg text-gray-800 font-medium">
                      {item?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item?.quantity}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <p className="text-xl font-semibold text-gray-800">Total</p>
              <p className="text-xl font-semibold text-emerald-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
