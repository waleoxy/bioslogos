import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full min-h-screen h-[960px] bg-no-repeat bg-cover  object-cover bg-[url('/heroBgImg.jpg')] bg-fixed">
      <section className="h-full flex justify-start items-center">
        <div className="text-white flex flex-col max-w-[600px] md:mx-[200px] mt-4">
          <h1 className="text-6xl leading-10 mb-10 font-semibold">
            Welcome to{" "}
            <span className="text-biosprimary tracking-tighter">
              BiosCheckpoint
            </span>
          </h1>{" "}
          <h2 className="font-semibold text-2xl mb-8  bg-gradient-to-r from-sky-300 to-black bg-clip-text text-transparent ">
            Empowering Students, One Lesson at a Time
          </h2>
          <p className="text-xl font-semibold bg-gradient-to-r from-sky-300 to-blue-900 bg-clip-text text-transparent">
            At{" "}
            <span className="text-bioslogo tracking-tighter font-bold">
              BiosCkeckpoint
            </span>
            , we believe that learning should be fun, interactive, and tailored
            to each student&apos;s needs. Explore a world of knowledge through
            our dynamic lessons, hands-on activities, and personalised study
            plans. Join us today and take the first step towards academic
            success!
          </p>
          <div className="mt-8 space-x-3">
            <Button className="bg-sky-700 hover:bg-sky-200 hover:text-sky-700 py-4 px-8">
              Get Started
            </Button>
            <Button className="bg-sky-700 hover:bg-sky-200 hover:text-sky-700 py-4 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
