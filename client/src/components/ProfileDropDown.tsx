import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { logout, useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Link } from "react-router-dom";

export type Tuser = {
  _id: string;
  email: string | undefined;
  role: string | undefined;
  id: string | undefined;
  name: string | undefined;
  city: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  image: string | undefined;
};
const ProfileDropDown = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  // console.log(token);

  const handleLogout = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state
    dispatch(logout());
  };

  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }
const {data:singleData}=useUserQuery(user?._id)
  return (
    <div>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative inline-flex  w-10 items-center justify-center rounded-full text-white">
              <img
                src={singleData?.data?.image}
                alt={singleData?.data?.name}
                title={user?.email}
               
                className=" rounded-full w-10 h-10"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem>
              {user?.role === "admin" ? (
                <Link to="/adminDashboard" className="w-full">
                  Dashboard
                </Link>
              ) : (
                <Link to="/userDashboard" className="w-full">
                  Dashboard
                </Link>
              )}
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <Link to="profileSettings" className="w-full">
                User Profile
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProfileDropDown;
