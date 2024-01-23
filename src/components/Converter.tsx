import { useEffect, useState } from "react";
import { convertToEmojis } from "../utils/converter";
import TextArea from "./TextArea";
import Output from "./Output";

const Converter = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [seed, setSeed] = useState<number[]>([]);
  const seedCount = 100;

  useEffect(() => {
    const initSeed = [];
    for (let i = 0; i < seedCount; i++) {
      initSeed.push(Math.random());
    }
    setSeed(initSeed);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value;
    setInputText(currentValue);
    setOutputText(convertToEmojis(currentValue, seed));
  };

  return (
    <div className="mt-[50%] flex w-full flex-col items-center gap-16">
      <TextArea value={inputText} onChange={onChange} />
      <Output value={outputText} />
    </div>
  );
};

export default Converter;
