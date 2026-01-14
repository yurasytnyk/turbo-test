"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello world test 1 from your ${appName} app!`)}
    >
      <span>Test 1</span>

      {children}
    </button>
  );
};
