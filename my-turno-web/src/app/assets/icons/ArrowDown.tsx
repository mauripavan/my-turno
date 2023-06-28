import { IconProps } from "@component/types/icons";


const ArrowDownIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.7542 0.495825C1.42973 0.171358 0.903667 0.171358 0.579199 0.495825C0.254732 0.820292 0.254732 1.34636 0.579199 1.67083L6.29293 7.38455C6.68345 7.77508 7.31661 7.77507 7.70714 7.38455L13.4209 1.67082C13.7453 1.34636 13.7453 0.820292 13.4209 0.495825C13.0964 0.171358 12.5703 0.171358 12.2459 0.495825L7.00003 5.74166L1.7542 0.495825Z"
      />
    </svg>
  );
};

export default ArrowDownIcon;
