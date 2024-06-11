import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type AnswerInputProps = {
  inputType: string;
  className?: string;
  number: string;
  mark: string;
  tag: string;
};

const AnswerInput = ({
  inputType,
  className,
  number,
  mark,
  tag,
}: AnswerInputProps) => {
  return (
    <div className="flex items-end px-3 space-x-4 w-full ">
      <div
        className={cn("flex items-end w-full", {
          "flex flex-col bg-red-300": tag === "withBox",
        })}
      >
        {inputType === "input" ? (
          Array(parseInt(number))
            .fill(0)
            .map((_, i) => (
              <div key={i} className={cn("flex flex-wrap w-full")}>
                {" "}
                <span className="flex items-end max-h-14 text-lg w-full">
                  {tag !== "withBox" && String.fromCharCode(i + 97)}
                  {tag === "withBox" && <Input />}
                  <Input className=" mb-1 text-lg font-normal outline-none border-0 border-b-2 border-dashed border-white ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 bg-transparent" />
                </span>
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
        <span className="text-base">{mark}</span>
      </div>
    </div>
  );
};

export default AnswerInput;
