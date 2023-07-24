const useCustomButton = () => {
  const getButtonVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return `bg-principal rounded-lg h-12 text-base text-white font-medium font-sans hover:enabled:bg-secondary active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] active:enabled:bg-principal disabled:text-gray-6 disabled:bg-gray-3`;
      case "secondary":
        return `bg-tertiary-1 rounded-lg h-12 text-base text-principal font-medium font-sans hover:enabled:bg-tertiary-2 active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] disabled:text-gray-6 disabled:bg-gray-3 `;
      case "tertiary":
        return `h-12 text-base text-principal font-medium font-sans hover:enabled:text-secondary active:enabled:text-principal disabled:text-gray-6`;
      case "fourth":
        return `group bg-gray-1 rounded-lg h-12 text-base text-principal font-medium font-sans hover:enabled:bg-gray-2 active:enabled:shadow-[inset_0_0_8px_rgba(0,0,0,0.24)] disabled:text-gray-6 disabled:bg-gray-3`;
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small": {
        return "px-3 py-2";
      }
      case "large": {
        return "px-20 py-3";
      }
      case "full": {
        return "w-full py-2.5";
      }
    }
  };

  return {
    getButtonVariant,
    getSizeClasses,
  };
};

export default useCustomButton;
