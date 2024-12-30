type Props = {
  text: string;
  className?: string;
  isBold?: boolean;
};

export const Text = (props: Props) => {
  const { text, className, isBold = false } = props;

  return (
    <span className={`whitespace-normal ${className} ${isBold && "font-bold"}`}>
      {text}
    </span>
  );
};
