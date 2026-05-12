"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSubtitle() {
  const { t } = useTranslation();

  return (
    <section className="px-4 pb-14 pt-2 sm:px-6 lg:px-2">
      <p className="mx-auto max-w-[780px] text-center text-lg font-semibold leading-8 text-gray-950 md:text-[20px]">
        {t("vocalchat.heroSubtitle")}
      </p>
    </section>
  );
}
