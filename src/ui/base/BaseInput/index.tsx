import cn from "@/lib/cn";
import React, { forwardRef } from "react";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      type,
      placeholder = "",
      disabled = false,
      className,
      error,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={cn(className)}>
        {label && (
          <span className="text-xl text-[#FCFDC7] font-geomGraphic font-semibold">
            {label}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className="mt-2 h-14 bg-[#11140C] border-2 border-[#9BA885] bg-inherit rounded-[10px] p-6 flex items-center font-geomGraphic"
          {...inputProps}
        ></input>
        {error && (
          <div className="font-geomGraphic font-normal text-red-500 mt-1">
            {error}
          </div>
        )}
      </div>
    );
  }
);

BaseInput.displayName = "Input";
export default BaseInput;
