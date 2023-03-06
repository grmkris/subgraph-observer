import type { ButtonHTMLAttributes } from "react";
import React from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost"
    | "link";
  size?: "lg" | "md" | "sm" | "xs" | "wide" | "block" | "circle" | "square";
  outline?: boolean;
  active?: boolean;
  glass?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  outline,
  active,
  glass,
  loading,
  noAnimation,
  children,
  ...props
}) => {
  const classNames = clsx(
    className,
    "btn",
    color && `btn-${color}`,
    size && `btn-${size}`,
    outline && "btn-outline",
    active && "btn-active",
    glass && "glass",
    loading && "loading",
    noAnimation && "no-animation"
  );

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
