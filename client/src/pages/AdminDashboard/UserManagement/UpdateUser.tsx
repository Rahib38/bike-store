import { Tuser } from "@/components/ProfileDropDown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useUserQuery,
  useUserUpdateMutation,
} from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateUser = () => {
  const [userUpdate] = useUserUpdateMutation();
  const { id } = useParams();
  console.log(id);

  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }
  const { data: singleData } = useUserQuery(user?._id);
  const datas = singleData?.data;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("sn", data);
    try {
      const res = await userUpdate(data);
      console.log(res);
      if (res?.error) {
        toast.error("please enter current name.");
      } else {
        toast.success("update user successfully", { duration: 2000 });
        reset();
      }
    } catch (err) {
      console.log("e", err);
      toast.error("something went wrong");
    }
    console.log(data);
  };

  // console.log(userUpdate);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center ">
          <a className="relative inline-flex items-center justify-center w-36 text-lg text-white border-2 border-white rounded bg-emerald-500">
            <img
              src={datas?.image}
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <div className="w-full">
            <Label>Name</Label>
            <Input
              // name="name"
              placeholder="Update your name"
              defaultValue={datas?.name}
              //   onChange={handleChange}

              required
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <Label>Email</Label>
            <Input
              type="email"
              // {...register("email")}
              value={user?.email}
              //   onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <Label>City</Label>
            <Input
              type="city"
              defaultValue={datas?.city}
              {...register("city")}

              //   onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Label>Address</Label>
            <Input
              type="address"
              // {...register("email")}
              defaultValue={datas?.address}
              //   onChange={handleChange}
              {...register("address")}
            />
          </div>
          <div className="w-full">
            <Label>Phone</Label>
            <Input
              type="phone"
              // {...register("email")}
              defaultValue={datas?.phone}
              //   onChange={handleChange}
              {...register("phone")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button type="submit" className="bg-emerald-500">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
