import { ISelectInputProps } from "./types";

export default function SelectInput(props: ISelectInputProps) {
  const { data, defaultValue, keyValue, onChange  } = props;
  return (
    <select
      defaultValue={defaultValue}
      className="w-full py-3 px-2 rounded-lg border border-color-gray-3"
      onChange={(e) => onChange(e)}
    >
      {data.map((item, key) => {
        return (
          <option disabled={key === 0} key={`${keyValue}-${key}`}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
