"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { BookOpen, MessageCircleQuestion, MessageSquare } from "lucide-react";

export function ApproachCard() {
  return (
    <>
      <div className="pt-4 pb-20 flex flex-col lg:flex-row items-center justify-center bg-transparent dark:bg-black w-full gap-4 mx-auto  px-8">
        <Card
          title="Promotion of active engagement, critical thinking, collaboration, and deeper understanding of the subject matter, an effective approach in educational contexts."
          heading="Interactive Learning"
          icon={<MessageSquare className="text-white h-12 w-12" />}
          className="bg-sky-700"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title=" Quizzes and exams assessment tools for feedbacks, support for student learning, achievement and progress evaluation."
          heading="Quizzes & Exams Practices"
          icon={<MessageCircleQuestion className="text-white h-12 w-12" />}
          className="bg-teal-500"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title=" Utilizing appropriate resources and materials based on individual learning preference. Leveraging various multimedia tools and technologies to enhance the learning experience."
          heading="Study Resources"
          icon={<BookOpen className="text-white h-12 w-12" />}
          className="bg-bioslogo"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

export const Card = ({
  title,
  heading,
  icon,
  className,
  txtClassName,
  children,
}: {
  title: string;
  heading: string;
  className?: string;
  txtClassName?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 pr-12 h-[26rem] relative rounded-xl",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("relative z-20 h-full w-full", txtClassName)}>
        <div className="text-center  group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto">
          <div className=" w-full text-wrap flex flex-col items-end">
            <span className="text-2xl font-medium text-black">{heading}</span>
            {icon}
          </div>
        </div>
        <h2
          className={cn(
            "dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
            txtClassName
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
