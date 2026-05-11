"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company?: string;
  rating: number;
  review: string;
  initials: string;
  bgColor?: string;
  image?: string;
}

const Review: React.FC = () => {
  const { t, i18n } = useTranslation();

  const testimonials = (t("testimonials.list", { returnObjects: true }) ||
    []) as Testimonial[];

  const dateOptions = (t("testimonials.dateOptions", {
    returnObjects: true,
  }) || {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) as Intl.DateTimeFormatOptions;

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const currentTestimonialData = testimonials[currentTestimonial] || {
    name: "",
    position: "",
    review: "",
    initials: "N/A",
    rating: 5,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-2">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight">
            {t("testimonials.header")}
          </h2>
        </div>

        {/* Grid: Left Cards + Right Active Testimonial */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Column: Cards */}
          <div className="flex flex-col gap-4 lg:w-1/3 h-full ">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex flex-col justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 h-full bg-white shadow-lg ${
                  currentTestimonial === index
                    ? "bg-primary-500/20 border border-purple-500"
                    : "bg-primary-900/30 border border-gray-300 hover:bg-primary-900/40"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-gray-600">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center`}
                    >
                      <span className="text-gray-600 text-xs lg:text-sm font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <Image
                      src={testimonial.image ?? "/fallback-avatar.png"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      unoptimized
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/fallback-avatar.png";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-black font-semibold text-sm mb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(testimonial.rating)
                              ? "text-primary-400 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">
                      {new Date().toLocaleDateString(
                        i18n.language,
                        dateOptions
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Active Testimonial */}
          <div className="flex-1 h-full">
            <div className="relative bg-white border border-gray-300 text-gray-600 rounded-xl p-6 lg:p-8 shadow-2xl h-full flex flex-col justify-between">
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-primary-500 rounded-full opacity-80" />
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl text-gray-600 leading-none mb-4 lg:mb-6 font-serif">
                  &ldquo;
                </div>

                <p className="text-black text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 font-medium">
                  {currentTestimonialData.review}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${currentTestimonialData.bgColor} flex items-center justify-center`}
                      >
                        <span className="text-gray-600 text-sm font-bold">
                          {currentTestimonialData.initials}
                        </span>
                      </div>
                      <Image
                        src={
                          currentTestimonialData.image ?? "/fallback-avatar.png"
                        }
                        alt={currentTestimonialData.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/fallback-avatar.png";
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-black font-bold text-base">
                        {currentTestimonialData.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {currentTestimonialData.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 lg:w-5 lg:h-5 ${
                          i < Math.floor(currentTestimonialData.rating)
                            ? "text-black fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.slice(0, 3).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-500 hover:bg-purple-400"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
