import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdatePasswordMutation } from "@/Redux/Features/Auth/AuthApi";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdatePassword = () => {
  const [updatePassword] = useUpdatePasswordMutation();

  const {
    register,
    handleSubmit,reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("sn", data);
    try {
      const res = await updatePassword(data);
      if (res.error) {
        toast.error("please enter current password.");
      } else {
        toast.success("update password successfully", { duration: 2000 });
        reset();
      }
    } catch (err) {
      console.log("e", err);
      toast.error('something went wrong')
    }
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Label>Old Password</Label>
            <Input
              type="oldPassword"
              //   name="oldPassword"
              // value={user.address}
              // onChange={handleChange}
              {...register("oldPassword")}
            />
          </div>
          <div className="w-full">
            <Label>New Password</Label>
            <Input
              type="newPassword"
              // value={user.address}
              // onChange={handleChange}
              {...register("newPassword")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button type="submit" className="bg-emerald-500">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
