import { Tuser } from "@/components/ProfileDropDown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserUpdateMutation } from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateUser = () => {
  const [userUpdate] = useUserUpdateMutation();

  const token = useAppSelector(useCurrentToken);
  console.log(token);
  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWEO9LwiEEhDFqIHon1zA6z1MZCTkkRvvAA&s"
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
              //   value={user.name}
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
