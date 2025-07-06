import type { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Flex } from "./Flex";

export type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  isBold?: boolean;
  className?: string;
  label: string;
  defaultValue?: string | number;
  placeholder?: string;
  value?: string | number;
  readOnly?: boolean;
};
export const TextField = (props: Props) => {
  const {
    onChange,
    className,
    isBold,
    defaultValue,
    value,
    placeholder,
    onKeyDown,
    readOnly,
  } = props;

  return (
    <Flex direction="column" gap="none" className={`w-[250px] ${className}`}>
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        className={`block rounded-full px-6 py-2.5 text-[14px] bg-secondary font-karla text-tertiary focus:text-white ${
          isBold ? "font-bold" : "font-medium"
        } `}
      />
    </Flex>
  );
};
