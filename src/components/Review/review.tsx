"use client";

import React from "react";
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
  const { t } = useTranslation();

  const testimonials = (t("testimonials.list", { returnObjects: true }) ||
    []) as Testimonial[];

  const visibleTestimonials = testimonials.slice(0, 10);
  const marqueeTestimonials = [
    ...visibleTestimonials,
    ...visibleTestimonials,
  ];

  return (
    <section className="overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-2">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight">
            {t("testimonials.header")}
          </h2>
        </div>

        <div className="relative -mx-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] sm:-mx-6 lg:-mx-2">
          <div className="review-marquee-track flex w-max gap-5 px-4 sm:px-6 lg:px-2">
            {marqueeTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="flex h-[255px] w-[300px] shrink-0 flex-col rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:w-[330px]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                    <div
                      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${testimonial.bgColor}`}
                    >
                      <span className="text-sm font-bold text-gray-700">
                        {testimonial.initials}
                      </span>
                    </div>
                    <Image
                      src={testimonial.image ?? "/fallback-avatar.png"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      unoptimized
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/fallback-avatar.png";
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-base font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="truncate text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-black text-black"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="line-clamp-5 text-sm leading-6 text-gray-700">
                  {testimonial.review}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes review-marquee {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .review-marquee-track {
          animation: review-marquee 45s linear infinite;
        }

        .review-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Review;
