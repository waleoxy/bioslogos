import { ApproachCard } from "./approach-card";
import MaxWidthWrapper from "./max-width-wrapper";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Approach = () => {
  return (
    <div className="bg-transparent">
      {" "}
      <div className="-mt-28 bg-white/55 backdrop-blur-2xl rounded-t-3xl pt-2 max-w-screen-2xl mx-auto">
        <MaxWidthWrapper className="">
          <TextGenerateEffect
            words="Rewarding and effective learning, through:"
            className="text-center w-1/2 mx-auto text-3xl text-biosprimary leading-10"
          />
          <ApproachCard />
        </MaxWidthWrapper>{" "}
      </div>
    </div>
  );
};

export default Approach;
