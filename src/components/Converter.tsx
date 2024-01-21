import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { convertToEmojis } from "../utils/converter";

const Converter = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setInputText(currentValue);
    setOutputText(convertToEmojis(currentValue));
  };

  return (
    <>
      <Input value={inputText} onChange={onChange} />
      <Output value={outputText} />
    </>
  );
};

export default Converter;
