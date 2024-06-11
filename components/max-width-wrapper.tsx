import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen-2xl px-4 md:px-24 h-full  mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
