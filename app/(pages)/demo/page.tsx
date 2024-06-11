"use client";

import { Card } from "@/components/approach-card";
import BoxFillPane from "@/components/box-fill-pane";
import WithImage from "@/components/component-render/with-image";
import WithoutImage from "@/components/component-render/without-image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import OptionPane from "@/components/option-pane";
import SinglePane from "@/components/single-pane";
import { Button } from "@/components/ui/button";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { questionsData } from "@/mock-data";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Demo = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);

  const { question } = questionsData;

  const [current, setCurrent] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(question.length);
  const [pageQuestions, setPageQuestions] = useState<
    typeof questionsData.question
  >([]);

  console.log(totalPages, currentPage, pageQuestions);

  useEffect(() => {
    let quest = question.slice(currentPage - 1, currentPage);
    setPageQuestions(quest);
  }, [currentPage]);

  useEffect(() => {
    setCurrent(0);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage === 1) {
      return;
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage === totalPages) {
      return;
    }
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOptionSelect = (i: number) => {
    setCurrent(i);
  };

  return (
    <div className="mt-[55px] w-full py-4 h-full">
      <MaxWidthWrapper className=" h-full max-h-[96%]  ">
        <div className="grid grid-cols-1 sm:grid-cols-12 pb-3">
          {/* side bar section for question categories pane */}
          <section className="col-span-2 bg-bioslogo/20 h-full py-3 border-gray-200  px-4 sm:px-0">
            <h3 className="leading-9 font-semibold text-xl border-2 px-2 bg-sky-700 text-white">
              Question Category
            </h3>
            <ul className="text-lg flex flex-col space-y-2 mt-2 h-20 sm:h-full overflow-auto ">
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
              <li className="leading-9 w-full bg-white cursor-pointer hover:scale-x-95 px-2">
                Cell
              </li>
            </ul>
          </section>
          {/* main pane for questions */}
          <section className=" col-span-8 bg-bioslogo/20 border border-gray-200 px-4 pt-2 shadow-2xl mt-1 min-h-[760px]">
            {pageQuestions.map(
              (
                { questionImg, questionNo, questionText, isImagePresent },
                i
              ) => (
                <div key={i} className="">
                  <div>
                    <h4 className="leading-9 font-semibold text-lg border-2 px-2 bg-sky-700 text-white">
                      Question {questionNo}
                    </h4>
                  </div>
                  {isImagePresent && (
                    <WithImage
                      questionImg={questionText.main[current].questionImg}
                      intro={questionText.intro}
                      handlePrevious={handlePrevious}
                      handleNext={handleNext}
                    />
                  )}
                  <div className="px-3 mt-8">
                    {questionText.tag === "withOptions" ? (
                      <OptionPane
                        current={current}
                        handleOptionSelect={handleOptionSelect}
                        intro={questionText.intro}
                        tag={questionText.tag}
                        main={questionText.main}
                      />
                    ) : (
                      <BoxFillPane
                        intro={questionText.intro}
                        tag={questionText.tag}
                        main={questionText.main}
                      />
                    )}
                    {!isImagePresent && (
                      <WithoutImage
                        questionImg={questionImg}
                        intro={questionText.intro}
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                      />
                    )}
                  </div>{" "}
                </div>
              )
            )}
          </section>
          {/*  */}
          {/* Question progress monitor */}
          <section className="col-span-2 bg-bioslogo/20 border border-gray-200 px-4 sm:px-0 pt-2 shadow-2xl mt-1">
            <h4 className="w-full leading-9 font-semibold text-lg border-2 px-2 bg-sky-700 text-white">
              Progress Monitor
            </h4>
            <div className="flex flex-col ">
              <div className="flex flex-shrink sm:flex-1 flex-wrap gap-2 p-2 overflow-auto">
                {Array(50)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "bg-sky-700/95 text-sm h-[26px] w-[26px] text-center  content-center text-white rounded-full",
                        {
                          "bg-primary": isInView && !isAnswered && i === 0,
                          "bg-biosprimary/25 text-biosprimary": isAnswered,
                        }
                      )}
                    >
                      {i + 1}
                    </span>
                  ))}
              </div>
              <div className="flex-1 mt-4">
                <h4 className="w-full leading-9 font-semibold text-lg border-2 px-2 bg-sky-700 text-white">
                  Answer Explained
                </h4>
                <Card
                  title="Producers are organisms which can manufacture their food by themselves. They are also called autotrophs or manufacturers. Here the answers are Bamboo and Water plants , which carry out photosynthesis-an autotrophic mode of nutrition"
                  heading="Peep"
                  icon={<BookOpen className="text-white h-12 w-12" />}
                  className="bg-bioslogo sm:h-[18rem] h-44 p-3 "
                  txtClassName=" text-sm mt-0 overflow-y-auto w-full"
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
              </div>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Demo;
