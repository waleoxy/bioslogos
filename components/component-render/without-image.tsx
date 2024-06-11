import Image from "next/image";
import { Button } from "../ui/button";

type WithImageProps = {
  questionImg: string;
  intro: string;
  handlePrevious: () => void;
  handleNext: () => void;
};

const WithoutImage = ({
  intro,
  handleNext,
  handlePrevious,
}: WithImageProps) => {
  return (
    <>
      <div className=" ">
        <div className="flex flex-col col-span-2 justify-between w-full mb-0">
          <h4 className="leading-9  font-semibold text-lg h-fit p-1 border-2 text-white">
            {intro &&
              intro.split(".").map((intro, i) => (
                <span key={i}>
                  <span className="leading-3">{intro}.</span>
                  <br />
                </span>
              ))}
          </h4>
          <div className="w-full flex space-x-3 justify-end mt-1 pr-4">
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

export default WithoutImage;
