import CheckIcon from "@component/app/assets/icons/Check";
import { ICheckboxStepProps } from "./types";

const CheckboxStep = (props: ICheckboxStepProps) => {
  const { stepName, stepNumber, completed, activeStep } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center mb-2">
        <div
          className={`flex flex-1 h-0.5 ${
            completed ? "bg-success" : activeStep ? "bg-principal" : "bg-gray-4"
          }`}
        />
        <div
          className={`flex  items-center justify-center w-8 h-8 rounded-lg ${
            completed ? "bg-success" : activeStep ? "bg-principal" : "bg-gray-4"
          } `}
        >
          {completed ? (
            <CheckIcon className="w-3 h-2" />
          ) : (
            <p className="font-semibold text-sm text-white">{stepNumber}</p>
          )}
        </div>
        <div
          className={`flex flex-1 h-0.5 ${
            completed ? "bg-success" : activeStep ? "bg-principal" : "bg-gray-4"
          }`}
        />
      </div>
      <p
        className={`text-sm ${
          completed
            ? "text-success"
            : activeStep
            ? "text-principal"
            : "text-gray-4"
        }`}
      >
        {stepName}
      </p>
    </div>
  );
};

export default CheckboxStep;
