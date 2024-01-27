import { useState } from "react";
import { ReactComponent as Copy } from "../../assets/copy.svg";

type CopyButtonProps = {
  copyText: string;
};

const CopyButton = ({ copyText }: CopyButtonProps) => {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(copyText);

    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleClick}
        className="rounded-md bg-black p-1 hover:bg-neutral-700"
      >
        <Copy />
      </button>
      <div
        className={`absolute left-0 top-0 -translate-x-[110%] rounded-md bg-black px-3 py-2 text-sm text-white
        ${tooltipVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: "opacity 0.2s ease-out",
        }}
      >
        Copied!
      </div>
    </div>
  );
};

export default CopyButton;
