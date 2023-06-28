import ArrowDownIcon from "@component/app/assets/icons/ArrowDown";
import { ReactElement } from "react";

export interface ICustomButtonProps {
  title: string;
  size?: Size;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: () => void;
}

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  fourth = "fourth",
}

const getButtonVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return `bg-principal rounded-lg h-12 w-44 text-base text-white font-medium font-sans hover:enabled:bg-secondary active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] active:enabled:bg-principal disabled:text-gray-6 disabled:bg-gray-3`;
    case "secondary":
      return `bg-tertiary-1 rounded-lg h-12 w-32 text-base text-principal font-medium font-sans hover:enabled:bg-tertiary-2 active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] disabled:text-gray-6 disabled:bg-gray-3 `;
    case "tertiary":
      return `h-12 w-32 text-base text-principal font-medium font-sans hover:enabled:text-secondary active:enabled:text-principal disabled:text-gray-6`;
    case "fourth":
      return `group bg-gray-1 rounded-lg h-12 w-44 text-base text-principal font-medium font-sans hover:enabled:bg-gray-2 active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] disabled:text-gray-6 disabled:bg-gray-3`;
  }
};

const CustomButton = (props: ICustomButtonProps) => {
  const { title, disabled, variant = ButtonVariants.primary } = props;

  const getButtonClasses = getButtonVariant(variant);

  return (
    <button className={`${getButtonClasses}`} disabled={disabled}>
      <div className="flex items-center justify-center">
        {variant === ButtonVariants.fourth && (
          <ArrowDownIcon
            className={`mr-2 fill-principal group-hover:fill-error group-active:fill-principal`}
          />
        )}
        <p>{title}</p>
      </div>
    </button>
  );
};

export default CustomButton;
