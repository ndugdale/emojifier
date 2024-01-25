import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`border-input bg-background ring-offset-background placeholder:text-muted-foreground
            flex min-h-32 w-full resize-none rounded-md border-[10px] border-solid
            border-black px-4 py-3 text-xl focus-visible:outline-none disabled:cursor-not-allowed
            disabled:opacity-50`}
        style={{
          borderTopLeftRadius: "25px 225px",
          borderTopRightRadius: "350px 20px",
          borderBottomRightRadius: "15px 255px",
          borderBottomLeftRadius: "200px 35px",
        }}
        ref={ref}
        {...props}
      />
    );
  },
);

export default TextArea;
