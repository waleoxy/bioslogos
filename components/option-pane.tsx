import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import AnswerInput from "./answer-input";

type OptionPaneProps = {
  tag: string;
  intro: string;
  main: {
    inputType: { type: string; number: string };
    text: string;
    mark: string;
  }[];
  handleOptionSelect: (i: number) => void;
  current: number;
};

const OptionPane = ({
  intro,
  main,
  tag,
  handleOptionSelect,
  current,
}: OptionPaneProps) => {
  //   const [current, setCurrent] = useState(0);
  const [option, setOption] = useState<typeof main>([]);

  //   const handleOptionSelect = (i: number) => {
  //     setCurrent(i);
  //   };

  return (
    <div className="w-full leading-9 font-semibold text-lg border-2 px-2 pt-4 bg-sky-700 rounded-lg shadow-md h-[180px] mt-3 text-white">
      <div className="w-full flex items-start justify-between">
        {" "}
        <h4 className="font-semibold flex-grow flex-1 w-full text-lg h-[60px] text-white overflow-auto">
          {String.fromCharCode(97 + current)}.{main[current]?.text}
        </h4>
        <div className="space-x-1 flex pb-3 justify-end px-2">
          {Array(main.length)
            .fill(0)
            .map((_, i) => (
              <span
                onClick={() => handleOptionSelect(i)}
                key={i}
                className="border px-1 text-sm font-bold rounded-md cursor-pointer hover:bg-bioslogo hover:text-primary"
              >
                {String.fromCharCode(97 + i)}
              </span>
            ))}
        </div>
      </div>

      <AnswerInput
        tag={tag}
        inputType={main[current]?.inputType.type}
        number={main[current]?.inputType.number}
        mark={main[current]?.mark}
      />
    </div>
  );
};

export default OptionPane;
