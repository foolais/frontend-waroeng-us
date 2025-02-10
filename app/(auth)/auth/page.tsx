"use client";

import FormLogin from "@/components/form/auth/form-login";
import FormRegister from "@/components/form/auth/form-register";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <h2 className="mb-4 text-3xl font-semibold">
        {isLogin ? "Welcome Back" : "Create an Account"}
      </h2>
      <div className="mx-auto w-3/4 md:w-5/6 lg:w-4/5 xl:w-1/2">
        {isLogin ? <FormLogin /> : <FormRegister />}
      </div>
      <p className="mt-4 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Button
          variant="link"
          className="text-primary"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Sign in"}
        </Button>
      </p>
    </div>
  );
};

export default AuthPage;
