import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Logo = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex items-center text-base leading-none text-primary",
        className,
      )}
      {...props}
      ref={ref}
    >
      <img className="h-[2.25em]" src="/logo.png" alt="" />
    </div>
  );
});
Logo.displayName = "Logo";

export default Logo;
