import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <section className="py-32 max-h-full">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <a href="https://shadcnblocks.com">
                <img
                  src="https://shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="mb-7 h-10 w-auto"
                />
              </a>
              <p className="mb-2 text-2xl font-bold">Shadcnblocks.com</p>
              <p className="text-muted-foreground">
                Please enter your details.
              </p>
            </div>
            <div>
              <div className="grid gap-4">
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password
                  </a>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <a href="#" className="text-primary hover:underline">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div>
          <img
            src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="" width='100px'
          />
        </div> */}
      </div>
    </section>
  );
};

export default Login;
