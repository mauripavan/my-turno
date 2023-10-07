import { ISelectInputProps } from './types';

export default function SelectInput(props: ISelectInputProps) {
  const {
    data,
    defaultValue,
    keyValue,
    id,
    errors,
    hideErrorMessage,
    registerOptions,
  } = props;
  return (
    <>
      <select
        defaultValue={defaultValue}
        className='w-full py-3 px-2 rounded-lg border border-color-gray-3'
        id={id}
        {...registerOptions}
      >
        {data.map((item, key) => {
          return (
            <option disabled={key === 0} key={`${keyValue}-${key}`}>
              {item}
            </option>
          );
        })}
      </select>
      {!hideErrorMessage && (
        <p className='text-xs mt-0.5 text-red-500'>{errors?.message}</p>
      )}
    </>
  );
}
