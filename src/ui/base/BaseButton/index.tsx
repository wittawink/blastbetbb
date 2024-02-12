import React, { Children, forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type, disabled, ...buttonProps }, ref) => {
    const button = (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={className}
        {...buttonProps}
      >
        {children}
      </button>
    );
    return button;
  }
);

BaseButton.displayName = "Button";
export default BaseButton;
