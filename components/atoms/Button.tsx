import cn from "@/app/utils/cn";
import * as React from "react";
import { type ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button(props: Props) {
  const {
    children,
    className,
    onClick,
    type = "button",
    disabled = false,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex flex-row items-center justify-center whitespace-nowrap rounded-full uppercase bg-transparent text-tertiary hover:text-white hover:outline hover:outline-1 sm:px-[25px] sm:py-[5px] md:px-[30px] md:py-[6px] md:outline-[2px] lg:px-[40px] lg:py-[6px] xl:px-[50px] xl:py-[8px]",
        "active:text-white active:outline active:outline-1 active:outline-white",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <span className="font-karla text-[20px]">{children}</span>
    </button>
  );
}
