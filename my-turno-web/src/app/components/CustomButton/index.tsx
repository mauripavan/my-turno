import ArrowDownIcon from "@component/app/assets/icons/ArrowDown";
import { ButtonVariants, ICustomButtonProps, Size } from "./types";
import useCustomButton from "./useCustomButton";

const CustomButton = (props: ICustomButtonProps) => {
  const { getButtonVariant, getSizeClasses } = useCustomButton();
  const {
    title,
    disabled,
    variant = ButtonVariants.primary,
    size = Size.full,
    onClick,
  } = props;

  const getButtonClasses = getButtonVariant(variant);
  const getButtonSizes = getSizeClasses(size);

  return (
    <button
      className={`${getButtonClasses} ${getButtonSizes}`}
      disabled={disabled}
      onClick={onClick}
    >
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
