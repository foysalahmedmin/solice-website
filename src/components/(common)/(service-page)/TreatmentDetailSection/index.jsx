import { cn } from "@/lib/utils";
import { useState } from "react";

export const TreatmentDetailSection = ({ treatment }) => {
  const [selectedComparison, setSelectedComparison] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {treatment.title}
            </h1>
            <p className="text-lg md:text-xl">{treatment.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Treatment Information */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                <div>
                  <h2 className="mb-6 text-3xl font-bold">About the Treatment</h2>
                  <div className="prose prose-lg max-w-none">
                    {treatment.description}
                  </div>
                </div>

                <div>
                  <h2 className="mb-6 text-3xl font-bold">Benefits</h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {treatment.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-card p-4"
                      >
                        <span className="mt-1 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6 text-3xl font-bold">Treatment Process</h2>
                  <div className="space-y-6">
                    {treatment.process.map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 rounded-lg bg-card p-6"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-semibold">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 rounded-2xl bg-card p-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Pricing</h3>
                  <div className="space-y-3">
                    {treatment.pricing.map((price, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-border pb-3"
                      >
                        <span className="font-medium">{price.service}</span>
                        <span className="text-lg font-semibold text-primary">
                          £{price.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold">Duration</h3>
                  <p className="text-lg">{treatment.duration}</p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold">Recovery Time</h3>
                  <p className="text-lg">{treatment.recovery}</p>
                </div>

                <button className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary/90">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      {treatment.beforeAfter && treatment.beforeAfter.length > 0 && (
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Treatment Results
            </h2>
            <div className="mx-auto max-w-4xl">
              {/* Main Comparison Display */}
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={treatment.beforeAfter[selectedComparison].before}
                  alt="Before treatment"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
                  style={{
                    clipPath: "inset(0 0 0 0)",
                  }}
                >
                  <img
                    src={treatment.beforeAfter[selectedComparison].after}
                    alt="After treatment"
                    className="absolute inset-0 h-full w-[200%] max-w-none object-cover"
                    style={{
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
                {/* Slider Handle */}
                <div className="absolute inset-y-0 right-1/2 flex w-1 cursor-ew-resize items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white shadow-lg">
                    <div className="flex h-full items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Labels */}
                <div className="absolute bottom-4 left-4 rounded bg-black/50 px-4 py-2 text-white">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 rounded bg-black/50 px-4 py-2 text-white">
                  After
                </div>
              </div>
              {/* Thumbnails */}
              {treatment.beforeAfter.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {treatment.beforeAfter.map((comparison, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedComparison(index)}
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-lg",
                        selectedComparison === index
                          ? "ring-2 ring-primary ring-offset-2"
                          : ""
                      )}
                    >
                      <img
                        src={comparison.after}
                        alt={`Result ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Video Testimonials Section */}
      {treatment.testimonials && treatment.testimonials.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Client Testimonials
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treatment.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-card shadow-lg"
                >
                  {/* Video */}
                  <div className="relative aspect-video">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`Testimonial by ${testimonial.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  {/* Testimonial Info */}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonial.comment}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Treatment Date: {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {treatment.faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentDetailSection;
