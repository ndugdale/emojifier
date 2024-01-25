import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`border-input bg-background ring-offset-background placeholder:text-muted-foreground
            focus-visible:ring-ring flex min-h-32 w-full resize-none rounded-md border px-4 py-3
            text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50`}
        ref={ref}
        {...props}
      />
    );
  },
);

export default TextArea;
