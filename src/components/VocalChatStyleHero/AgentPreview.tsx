"use client";

import React from "react";
import { Phone, PhoneOff } from "lucide-react";
import { CiWavePulse1 } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export default function CallNotification() {
  const { t } = useTranslation();
  const problemImages: Record<number, string> = {
    1: "/images/Pain point/overload front desk.png",
    2: "/images/Pain point/miss call.png",
    3: "/images/Pain point/dashboard.jpg",
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:py-14 lg:px-2 overflow-x-hidden">
      {/* ====== SECTION HEADING ====== */}
      <div className="w-full max-w-[1200px] mx-auto text-center mb-12">
        <h2 className="text-black font-medium text-[30px] sm:text-[34px] lg:text-[42px] leading-tight">
          {t("vocalchat.sectionHeading")}
        </h2>
      </div>

      {/* ====== TOP: INCOMING CALL CARD ====== */}
      <div className="w-full max-w-[1200px] mx-auto flex justify-center mb-1 overflow-x-auto">
        <div className="bg-black rounded-full px-5 sm:px-6 py-3 flex items-center gap-4 shadow-lg shrink-0 min-w-fit">
          {/* Avatar / Call Icon */}
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden shrink-0 text-white">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden text-white">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop"
                alt="AI Male Avatar"
                className="w-full h-full object-cover text-white"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col shrink-0">
            <p
              className="whitespace-nowrap text-[clamp(10px,1.6vw,14px)] !text-white"
              style={{ color: "#ffffff" }}
            >
              {t("vocalchat.incomingCall") || "Incoming Call"}
            </p>
            <p
              className="whitespace-nowrap text-[clamp(14px,2vw,18px)] font-semibold !text-white"
              style={{ color: "#ffffff" }}
            >
              {t("vocalchat.salesClient") || "Sales Client"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-3 shrink-0">
            <button className="flex h-9 w-9 items-center justify-center rounded-2xl bg-red-500 transition-all hover:scale-110 hover:bg-red-600 sm:h-10 sm:w-10">
              <PhoneOff className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </button>
            <button className="flex h-9 w-9 animate-pulse items-center justify-center rounded-2xl bg-green-500 transition-all hover:scale-110 hover:bg-green-600 sm:h-10 sm:w-10">
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="w-1 h-12 sm:h-14 bg-gradient-to-t from-purple-600 via-purple-300 to-purple-100"></div>

      {/* ====== ANSWERED BY CARD ====== */}
      <div className="w-full flex justify-center mb-0 overflow-x-0">
        <div className="relative rounded-[16px] px-5 py-4 flex items-center gap-4 bg-white shadow-[0px_2px_36px_8px_rgba(147,_51,_234,_0.16)] min-w-fit">
          {/* Avatar */}
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden bg-gray-100 shrink-0">
            <img
              src="/images/ai-voice/Amira.png"
              alt="AI Amira"
              className="w-full h-full object-cover object-center scale-182 translate-y-7"
            />
          </div>

          {/* Text + Wave Bars */}
          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-gray-400 text-[clamp(13px,1.8vw,20px)] whitespace-nowrap">
                Answered by
              </span>
              <span className="rounded-xl bg-purple-50 px-[6px] py-[2px] text-[clamp(10px,1.5vw,14px)] font-semibold text-purple-700 whitespace-nowrap">
                AI Amira
              </span>
            </div>

            {/* Wave Bars */}
            <div className="flex items-end gap-1">
              {[8, 16, 12, 20, 16, 22, 20, 16, 12, 20, 14, 10].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full ${
                    i < 6 ? "bg-green-400" : "bg-orange-400"
                  }`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="w-1 h-12 sm:h-14 bg-gradient-to-b from-purple-600 via-purple-300 to-purple-100"></div>

      {/* ====== PROBLEM CARDS ====== */}
      <div className="mt-1 w-full max-w-[1120px] rounded-[16px] border border-gray-200 bg-white p-4 text-black shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-5">
        <div className="flex justify-center mb-6 mt-2">
          <div className="flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm text-black">
            <span className="mr-2">
              {t("vocalchat.stopLosing") || "Stop losing leads"}
            </span>
            <CiWavePulse1
              size={22}
              className="wave-dotted text-purple-700 opacity-90"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => {
            const imageClass = "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]";
            const imagePosition =
              num === 1
                ? "object-[68%_center]"
                : num === 2
                  ? "object-[center_72%]"
                  : "object-[center_35%]";

            return (
            <div
              key={num}
              className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[16px] border border-black bg-black p-4 text-left text-white shadow-[0_12px_35px_rgba(15,23,42,0.16)] sm:min-h-[350px]"
            >
              <img
                src={problemImages[num]}
                alt={`Problem ${num}`}
                className={`${imageClass} ${imagePosition} absolute inset-0`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/58 to-black/20" />
              <div className="relative z-10 w-full">
                <h3 className="mb-2 whitespace-nowrap text-left text-[18px] font-medium leading-snug text-white sm:text-[19px] lg:text-[20px]">
                  {t(`vocalchat.problem${num}Title`) || `Problem ${num}`}
                </h3>
                <p className="whitespace-pre-line text-left text-sm leading-6 text-white/86">
                  {t(`vocalchat.problem${num}Desc`) ||
                    `Description of problem ${num}.`}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
