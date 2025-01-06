import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const BannerSection = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen-minus-header w-full flex-col",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BannerSection.displayName = "BannerSection";

const BannerBackground = forwardRef(
  ({ className, image, video, iframe, ...props }, ref) => {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 size-full overflow-hidden",
          className,
        )}
        ref={ref}
        {...props}
      >
        {image && (
          <img
            className="size-full object-cover object-center"
            src={image}
            alt="Banner Image"
          />
        )}
        {video && (
          <video
            className="w-full object-cover object-center"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        {iframe && (
          <iframe
            className="size-full object-cover object-center"
            src={iframe}
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        )}
      </div>
    );
  },
);
BannerBackground.displayName = "BannerBackground";

const BannerContainer = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "container flex flex-1 items-center justify-center py-16 md:py-24",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BannerContainer.displayName = "BannerContainer";

const BannerContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-3xl space-y-6 text-center md:space-y-8",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BannerContent.displayName = "BannerContainer";

const BannerTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h1
      className={cn("font-medium capitalize md:text-5xl", className)}
      {...props}
      ref={ref}
    />
  );
});
BannerTitle.displayName = "BannerTitle";

const BannerDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("text-xl text-title md:text-2xl", className)}
      {...props}
      ref={ref}
    />
  );
});
BannerDescription.displayName = "Description";

export {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
};
