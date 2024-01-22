type OutputProps = {
  value: string;
};

const Output = ({ value }: OutputProps) => {
  return (
    <div className="text-center text-4xl leading-[4rem]">
      {value.split(/(\s+)/).map((word, index) => {
        return (
          <span key={index} className="mr-6 inline-block whitespace-nowrap">
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default Output;
