export interface ICustomButtonProps {
    title: string;
    size?: Size;
    variant?: ButtonVariants;
    disabled?: boolean;
    onClick?: () => void;
  }
  
  export enum Size {
    small = "small",
    large = "large",
    full = "full",
  }
  
  export enum ButtonVariants {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    fourth = "fourth",
  }