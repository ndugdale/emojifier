import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <div className="my-32 flex min-h-full w-full lg:w-[64rem]">
        {children}
      </div>
    </div>
  );
};

export default Content;
