import CopyButton from "./CopyButton";

type OutputProps = {
  value: string;
};

const Output = ({ value }: OutputProps) => {
  return (
    <div
      className={`flex min-h-80 w-full flex-col justify-center border-[10px] border-solid border-black bg-white
        p-4 text-center text-4xl leading-[4rem]`}
      style={{
        borderTopLeftRadius: "255px 15px",
        borderTopRightRadius: "35px 225px",
        borderBottomRightRadius: "225px 15px",
        borderBottomLeftRadius: "15px 255px",
      }}
    >
      <div className="flex flex-grow items-center justify-center overflow-hidden">
        <div>
          {value.split(/(\s+)/).map((word, index) => {
            return (
              <span key={index} className="mr-6 inline-block whitespace-nowrap">
                {word}
              </span>
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-4 -mt-12 self-end">
        <CopyButton copyText={value} />
      </div>
    </div>
  );
};

export default Output;
