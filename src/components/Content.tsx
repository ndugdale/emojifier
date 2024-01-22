import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <div className="flex h-full w-full xl:w-[80rem]">{children}</div>
    </div>
  );
};

export default Content;
