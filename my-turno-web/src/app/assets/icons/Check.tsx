import { IconProps } from "@component/types/icons";

const CheckIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.02096 5.50191L10.3759 0.352947C10.6893 0.0516219 11.1847 0.0516219 11.4981 0.352947C11.8293 0.671457 11.8293 1.20151 11.4981 1.52002L5.60494 7.18648C5.27482 7.49011 4.7671 7.49011 4.43697 7.18648L0.981348 3.86377C0.650098 3.54526 0.650098 3.01521 0.981348 2.6967C1.29473 2.39537 1.79015 2.39537 2.10353 2.6967L5.02096 5.50191Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckIcon;
