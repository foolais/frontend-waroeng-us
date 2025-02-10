import Image from "next/image";
import { ReactNode } from "react";
import FoodHero from "@/public/food-hero.jpg"; // Ensure the correct path

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full bg-background p-6">
      {/* Left side with hero image */}
      <div className="md:flex-center relative hidden overflow-hidden rounded-xl md:w-1/2 xl:w-[40%]">
        <Image
          alt="FoodHero"
          src={FoodHero}
          className="absolute inset-0 h-full w-full rounded-xl object-cover"
          fill
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Text Content */}
        <div className="relative z-10 flex max-w-md flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-3xl font-extrabold leading-tight">
            Boost Efficiency and Productivity with
            <span className="ml-2 rounded-xl bg-primary px-2">Waroeng Us</span>
          </h1>
        </div>
      </div>
      {/* Right side (children content) */}
      <div className="flex-center w-full md:w-1/2 xl:w-[60%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
