import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import AnswerInput from "./answer-input";
import BoxAnswerInput from "./box-answer-input";

type TypeMain = {
  inputType: { type: string; number: string };
  text: string;
  mark: string;
  boxVariant: string;
  boxLabel?: string[];
  boxAnswerChoices?: string[];
};

type OptionPaneProps = {
  tag: string;
  intro: string;
  main: Partial<TypeMain>[];
};

const BoxFillPane = ({ intro, main, tag }: OptionPaneProps, { ...props }) => {
  const [current, setCurrent] = useState(0);
  const [option, setOption] = useState<typeof main>([]);

  const handleOptionSelect = (i: number) => {
    setCurrent(i);
  };

  console.log("inB", main[current].boxAnswerChoices);

  return (
    <div className="w-full font-semibold text-lg border-2 px-2 pt-3 mt-0  bg-white/25 rounded-lg shadow-md h-full text-sky-900">
      <div className="w-full flex items-start justify-between">
        {" "}
        <h4 className="ml-1 font-semibold flex-grow flex-1 w-full text-lg h-[60px] text-sky-950">
          {String.fromCharCode(97 + current)}.{main[current]?.text}
        </h4>
        <div className="space-x-1 flex pb-3 justify-end px-2">
          {Array(main.length)
            .fill(0)
            .map((_, i) => (
              <span
                onClick={() => handleOptionSelect(i)}
                key={i}
                className="border px-2 text-sm font-bold rounded-md cursor-pointer border-sky-500  hover:bg-biosprimary hover:text-white"
              >
                {String.fromCharCode(97 + i)}
              </span>
            ))}
        </div>
      </div>

      <BoxAnswerInput
        tag={tag}
        variant={main[current]?.boxVariant!}
        questionText={main[current].text!}
        boxLabel={main[current].boxLabel!}
        inputType={main[current]?.inputType?.type!}
        number={main[current]?.inputType?.number!}
        mark={main[current]?.mark!}
        boxAnswerChoices={main[current].boxAnswerChoices!}
      />
    </div>
  );
};

export default BoxFillPane;
