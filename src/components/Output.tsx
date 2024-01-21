type OutputProps = {
  value: string;
};

const Output = ({ value }: OutputProps) => {
  return <div className="text-4xl">{value}</div>;
};

export default Output;
