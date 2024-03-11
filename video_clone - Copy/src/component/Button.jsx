import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
export const ButtonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      DEFAULT: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "DEFAULT",
  },
});

// type ButtonProps = VariantProps<typeof ButtonStyles> & ComponentProps<"button">;
export const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(ButtonStyles({ variant, size }), className)}
    />
  );
};
