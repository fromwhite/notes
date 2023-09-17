import * as React from "react";
import styles from "./button.module.scss";

interface Props {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  aria?: string;
  children?: React.JSX.Element;
}

type Attrs = Omit<
  Partial<React.ButtonHTMLAttributes<any> & React.HTMLAttributes<any>>,
  keyof Props
>;
export type ButtonProps = Props & Attrs;

export type ButtonType = "primary" | null;

export const Button = ({
  onClick,
  icon,
  type,
  text,
  bordered,
  shadow,
  className,
  title,
  disabled,
  autoFocus,
  aria,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        styles.button,
        bordered && styles.border,
        shadow && styles.shadow,
        className ?? "",
        type && styles.type,
      ]
        .join(" ")
        .trim()}
      onClick={onClick}
      title={title}
      disabled={disabled}
      role="button"
      autoFocus={autoFocus}
      aria-label={aria}
    >
      {icon && (
        <div className={styles.icon + ` ${type === "primary" && "no-dark"}`}>
          {icon}
        </div>
      )}
      {text && <div className={styles.text}>{text}</div>}
      {children}
    </button>
  );
};
