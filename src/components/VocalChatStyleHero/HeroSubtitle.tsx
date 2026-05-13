"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const homeBadges = [1, 2, 3, 4, 5, 6, 7].map((badge) => ({
  src: `/images/home-badges/${badge}.svg`,
  alt: `Zaptal clinic automation badge ${badge}`,
}));

const homeBadgeRows = [homeBadges.slice(0, 4), homeBadges.slice(4)];

export default function HeroSubtitle() {
  const { t } = useTranslation();

  return (
    <section className="px-4 pb-14 pt-2 sm:px-6 lg:px-2">
      <p className="mx-auto max-w-[780px] text-center text-lg font-semibold leading-8 text-gray-950 md:text-[20px]">
        {t("vocalchat.heroSubtitle")}
      </p>
      <div className="mx-auto mt-8 flex w-full max-w-[1120px] flex-col items-center gap-5">
        {homeBadgeRows.map((row, rowIndex) => (
          <div
            key={`home-badge-row-${rowIndex}`}
            className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-5 lg:flex-nowrap"
          >
            {row.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={360}
                height={360}
                unoptimized
                priority
                fetchPriority="high"
                className="h-auto w-full max-w-[156px] object-contain transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.07] sm:max-w-[190px] lg:max-w-[236px]"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
