import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn("max-w-screen-xl w-full mx-auto px-2 md:px-4", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
