import { useEffect, useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { convertToEmojis } from "../utils/converter";

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setInputText(currentValue);
    setOutputText(convertToEmojis(currentValue, seed));
  };

  return (
    <div className="mt-[50%] flex w-full flex-col items-center gap-16">
      <Input value={inputText} onChange={onChange} />
      <Output value={outputText} />
    </div>
  );
};

export default Converter;
