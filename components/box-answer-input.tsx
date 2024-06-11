import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";

type AnswerInputProps = {
  inputType: string;
  className?: string;
  number: string;
  boxLabel: string[];
  boxAnswerChoices: string[];
  questionText: string;
  mark: string;
  tag: string;
  variant: string;
};

const BoxAnswerInput = ({
  inputType,
  boxLabel,
  boxAnswerChoices,
  className,
  questionText,
  number,
  mark,
  tag,
  variant,
}: AnswerInputProps) => {
  console.log("box", boxAnswerChoices);

  return (
    <div className="flex flex-col items-end px-3 space-x-4 w-full min-h-96 h-full pb-8 ">
      <div className="flex flex-col space-y-10 min-h-96 mt-6">
        {" "}
        <div className="  h-fit w-full flex flex-wrap justify-evenly  mt-4 gap-5">
          {boxAnswerChoices &&
            variant !== "equation" &&
            Object.values(boxAnswerChoices).map((choice, i) => (
              <p
                key={i}
                className="text-sky-950 bg-white/25 text-xl py-3 w-fit border border-gray-400 px-5"
              >
                {choice}
              </p>
            ))}{" "}
        </div>
        <div
          className={cn(" w-full", {
            "flex flex-col ml-24 gap-5": tag === "withBox",
            "flex flex-row items-center ml-0 h-full": variant === "equation",
          })}
        >
          {inputType === "input" ? (
            Array(parseInt(number))
              .fill(0)
              .map((_, i) => (
                <div key={i} className={cn("flex space-x-0 w-full")}>
                  {" "}
                  <div
                    className={cn(
                      "flex items-center gap-12 max-h-14 text-lg w-full",
                      {
                        "gap-2": variant === "equation",
                      }
                    )}
                  >
                    {tag !== "withBox" && String.fromCharCode(i + 97)}
                    {tag === "withBox" && (
                      <Button
                        type="button"
                        className={cn(
                          "bg-sky-400 text-sky-950 min-w-40 text-xl font-normal py-6 text-center pointer-events-none",
                          {
                            "text-lg font-semibold border w-fit px-0 border-sky-300 bg-transparent":
                              variant === "equation",
                          }
                        )}
                      >
                        {boxLabel[i]}
                      </Button>
                    )}
                    {variant === "equation" && "+"}
                    <Input
                      className={cn(
                        " min-h-1 max-w-96 text-xl font-normal outline-none border-sky-300 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 bg-transparent ",
                        {
                          "pointer-events-none placeholder:font-bold":
                            boxLabel[i] === "root",
                          "w-[170px] ": variant === "equation",
                        }
                      )}
                      placeholder={`${
                        boxLabel[i] === "root"
                          ? "absorption of water"
                          : "......................................."
                      }`}
                    />
                    {i !== boxLabel.length - 1 && variant === "equation" && (
                      <ArrowBigRight className="h-12 w-12" />
                    )}
                  </div>
                </div>
              ))
          ) : inputType === "textarea" ? (
            <div className="w-full">
              <Textarea
                rows={parseInt(number)}
                className="text-lg font-normal text-sky-800 outline-none border-0 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
              />
            </div>
          ) : null}{" "}
        </div>
      </div>
      <span className="text-base">{mark}</span>
    </div>
  );
};

export default BoxAnswerInput;
