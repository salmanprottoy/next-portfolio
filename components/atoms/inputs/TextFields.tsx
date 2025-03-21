import type { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Flex } from "../layouts/Flex";
import { Text } from "../typography/Text";

export type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  isBold?: boolean;
  className?: string;
  label: string;
  defaultValue?: string | number;
  placeholder?: string;
  value?: string | number;
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
  } = props;

  return (
    <Flex direction="col" gap="0px" className={`w-[250px] ${className}`}>
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        className={`block rounded-full px-6 py-2.5 text-[14px] bg-secondary font-karla text-tertiary focus:text-white ${
          isBold ? "font-bold" : "font-medium"
        } `}
      />
    </Flex>
  );
};
