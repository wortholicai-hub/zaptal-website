"use client";

import React from "react";
import { Phone, PhoneOff } from "lucide-react";
import { CiWavePulse1 } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const DottedArrowUpRight = ({ color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    strokeDasharray="2 3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M7 17L17 7m0 0H9m8 0v8" />
  </svg>
);

export default function CallNotification() {
  const { t } = useTranslation();

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
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden shrink-0">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop"
                alt="AI Male Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col shrink-0">
            <p className="text-gray-400 text-[clamp(10px,1.6vw,14px)] whitespace-nowrap">
              {t("vocalchat.incomingCall") || "Incoming Call"}
            </p>
            <p className="text-white font-semibold text-[clamp(14px,2vw,18px)] whitespace-nowrap">
              {t("vocalchat.salesClient") || "Sales Client"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-3 shrink-0">
            <button className="w-9 sm:w-10 h-9 sm:h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
              <PhoneOff className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </button>
            <button className="w-9 sm:w-10 h-9 sm:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110 animate-pulse">
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="w-1 h-12 sm:h-14 bg-gradient-to-t from-purple-600 via-purple-300 to-purple-100"></div>

      {/* ====== ANSWERED BY CARD ====== */}
      <div className="w-full flex justify-center mb-0 overflow-x-0">
        <div className="relative rounded-[24px] px-5 py-4 flex items-center gap-4 bg-white shadow-[0px_2px_36px_8px_rgba(147,_51,_234,_0.16)] min-w-fit">
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
              <span className="text-orange-300 bg-[#f0ece1] font-semibold text-[clamp(10px,1.5vw,14px)] rounded-xl px-[6px] py-[2px] whitespace-nowrap">
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
      <div className="w-full max-w-[1120px] mt-1 bg-[#111111] rounded-[24px] p-4 sm:p-5 text-white">
        <div className="flex justify-center mb-6 mt-2">
          <div className="flex items-center bg-[#ffffff1a] text-white text-sm px-4 py-2 rounded-full">
            <span className="mr-2">
              {t("vocalchat.stopLosing") || "Stop losing leads"}
            </span>
            <CiWavePulse1
              size={22}
              className="text-white opacity-90 wave-dotted"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`relative ${
                num === 2
                  ? "bg-[#6b43f233]"
                  : "bg-[#111111]"
              } p-4 rounded-[16px] text-left min-h-[300px] sm:min-h-[340px] flex flex-col justify-between items-center`}
            >
              <div>
                <h3 className="text-[22px] font-medium mb-2 text-left whitespace-pre-line">
                  {t(`vocalchat.problem${num}Title`) || `Problem ${num}`}
                </h3>
                <p className="text-gray-400 text-sm leading-6 text-left whitespace-pre-line">
                  {t(`vocalchat.problem${num}Desc`) ||
                    `Description of problem ${num}.`}
                </p>
              </div>
              <img
                src={`/images/agents/${num}.png`}
                alt={`Problem ${num}`}
                className={`object-cover mt-4 rounded-xl scale-120 ${
                  num === 3
                    ? "w-36 h-36 sm:w-48 sm:h-48"
                    : "w-32 h-32 sm:w-40 sm:h-40"
                }`}
              />
              {num === 2 && (
                <div className="flex justify-center mt-4">
                  <button
                    aria-label="Learn More"
                    onClick={() => {
                      const section = document.getElementById("features");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[clamp(10px,1.5vw,14px)] flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[14px] bg-white text-black border border-gray-200 hover:bg-purple-100 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                  >
                    {t("vocalchat.learnMore") || "Learn More"}
                    <DottedArrowUpRight color="black" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
