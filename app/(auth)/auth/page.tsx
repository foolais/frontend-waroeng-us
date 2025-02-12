"use client";

import FormLogin from "@/components/form/auth/form-login";
import FormRegister from "@/components/form/auth/form-register";
import { useState } from "react";
import { toast } from "sonner";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <h2 className="mb-4 text-3xl font-semibold">
        {isLogin ? "Welcome Back" : "Create an Account"}
      </h2>
      <div className="mx-auto w-3/4 md:w-5/6 lg:w-4/5 xl:w-1/2">
        {isLogin ? (
          <FormLogin />
        ) : (
          <FormRegister
            onSuccess={() => {
              setIsLogin(!isLogin);
              toast.success("Account created successfully");
            }}
          />
        )}
      </div>
      <div className="flex-center mt-4 gap-1 text-sm">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        </p>
        <p
          className="cursor-pointer text-primary"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Sign in"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
