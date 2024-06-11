import Image from "next/image";
import { Button } from "../ui/button";

type WithImageProps = {
  questionImg: string;
  intro: string;
  handlePrevious: () => void;
  handleNext: () => void;
};

const WithImage = ({
  questionImg,
  intro,
  handleNext,
  handlePrevious,
}: WithImageProps) => {
  return (
    <>
      <div className="max-h-[650px] pt-2 flex flex-col">
        {" "}
        <h4 className="font-semibold text-base h-fit pt-1 border-2 px-2 bg-sky-700 text-white">
          {intro &&
            intro.split(".").map((intro, i) => (
              <span key={i}>
                <span className="leading-none">
                  {intro}
                  {i < intro.split(".").length && "."}
                </span>
                <br />
              </span>
            ))}
        </h4>
        <div className="grid grid-cols-7 w-full">
          <div className="h-[400px] sm:h-[380px] overflow-auto col-span-5">
            <Image
              src={questionImg!}
              height={470}
              width={340}
              alt="pix"
              className="w-[450px]"
            />
          </div>
          <div className="items-end h-full w-full col-span-2 flex space-x-3 justify-end mt-1 pr-4">
            {" "}
            <Button
              onClick={handlePrevious}
              className="bg-sky-800 hover:bg-sky-500"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-sky-800 hover:bg-sky-500"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithImage;
