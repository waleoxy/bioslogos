import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { WobbleCard } from "./ui/wobble-card";
import { ImagesSlider } from "./ui/image-slider";

const Metrics = () => {
  return (
    <div className="max-h-screen h-[700px] mt-10">
      <MaxWidthWrapper>
        <div className="flex flex-col h-[600px]">
          {" "}
          <h3 className="text-5xl font-bold text-center text-biosprimary tracking-tighter mb-10">
            Academic Performance Dashboard
          </h3>
          <div className="flex flex-col md:flex-row items-center px-20 h-full justify-between gap-8">
            <WobbleCard
              containerClassName="max-w-[550px]"
              className="flex-1 h-full"
            >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  A comprehensive overview of your academic progress and
                  performance.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  From grades and attendance records to course completion rates
                  and assessment scores, our intuitive dashboard provides
                  real-time insights to help you stay on track and achieve your
                  educational goals.
                </p>
              </div>
            </WobbleCard>
            <div className="flex flex-1 h-full items-center max-h-[400px]">
              <ImagesSlider
                images={[
                  "/learning-analytics4.png",
                  "/learning-analytics2.png",
                  "/learning-analytics1.png",
                ]}
                children={undefined}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Metrics;
