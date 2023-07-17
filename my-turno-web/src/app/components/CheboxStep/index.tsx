import CheckIcon from "@component/app/assets/icons/Check";
import { ICheckboxStepProps } from "./types";

const CheckboxStep = (props: ICheckboxStepProps) => {
  const { name, number, completed, active } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center mb-2">
        <div
          className={`flex flex-1 h-0.5 ${
            completed ? "bg-success" : active ? "bg-principal" : "bg-gray-4"
          }`}
        />
        <div
          className={`flex  items-center justify-center w-8 h-8 rounded-lg ${
            completed ? "bg-success" : active ? "bg-principal" : "bg-gray-4"
          } `}
        >
          {completed ? (
            <CheckIcon className="w-3 h-2" />
          ) : (
            <p className="font-semibold text-sm text-white">{number}</p>
          )}
        </div>
        <div
          className={`flex flex-1 h-0.5 ${
            completed ? "bg-success" : active ? "bg-principal" : "bg-gray-4"
          }`}
        />
      </div>
      <p
        className={`text-sm text-center ${
          completed ? "text-success" : active ? "text-principal" : "text-gray-4"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default CheckboxStep;
