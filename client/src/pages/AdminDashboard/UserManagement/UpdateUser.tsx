/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tuser } from "@/components/ProfileDropDown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useUserQuery,
  useUserUpdateMutation,
} from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateUser = () => {
  const [image, setImage] = useState<File | null>(null);
  const [userUpdate] = useUserUpdateMutation();

  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }

  const { data: singleData, isLoading } = useUserQuery(user?._id);
  const datas = singleData?.data;

  const { register, handleSubmit, reset } = useForm();
  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const onSubmit = async (data: FieldValues) => {
    // const updatedFields: Record<string, any> = {};
    // Object.keys(data).forEach((key) => {
    //   if (data[key] !== datas?.[key] && key !== "email") {
    //     updatedFields[key] = data[key];
    //   }
    // });

    // if (Object.keys(updatedFields).length === 0) {
    //   toast.info("No changes detected.");
    //   return;
    // }

    try {
      if (!image) return alert("Select your image first");
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", "Rahib38");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drcynlax7/image/upload", // Replace with your Cloudinary cloud name
        formData
      );
      const imageUrl = response.data.secure_url;
      const productData = {
        ...data,
        // updatedFields,
        image: imageUrl,
      };
      const res = await userUpdate(productData);
      if (res?.error) {
        toast.error("Please enter a valid input.");
      } else {
        toast.success("User updated successfully!", { duration: 2000 });
        // reset({ ...datas, ...updatedFields });
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };
  if (isLoading) {
    return " loading....";
  }
  return (
    <Card className="max-w-2xl mx-auto mt-10 p-6 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Update Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={datas?.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Update your name"
                defaultValue={datas?.name}
                {...register("name")}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={datas?.email}
                disabled
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium " htmlFor="image">
                Image
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageChange(file); // Store the selected file in state
                  }
                }}
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                defaultValue={datas?.city}
                {...register("city")}
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                defaultValue={datas?.address}
                {...register("address")}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="number"
                defaultValue={datas?.phone}
                {...register("phone")}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-emerald-500">
              Update Profile
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateUser;
