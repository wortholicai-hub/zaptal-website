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
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center py-14 md:py-20 px-[4%] md:px-[3%] lg:px-[0%] overflow-x-hidden">
      {/* ====== SECTION HEADING ====== */}
      <div className="w-full max-w-[1200px] mx-auto text-center mb-24">
        <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight">
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
      <div className="w-1 h-20 sm:h-24 bg-gradient-to-t from-purple-600 via-purple-300 to-purple-100"></div>

      {/* ====== ANSWERED BY CARD ====== */}
      <div className="w-full flex justify-center mb-0 overflow-x-0">
        <div className="relative rounded-4xl px-6 py-5 flex items-center gap-4 bg-white shadow-[0px_2px_49px_15px_rgba(147,_51,_234,_0.2)] min-w-fit">
          {/* Avatar */}
          <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full overflow-hidden bg-gray-100 shrink-0">
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
              {[10, 20, 14, 24, 20, 28, 24, 20, 14, 24, 16, 12].map((h, i) => (
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
      <div className="w-1 h-20 sm:h-24 bg-gradient-to-b from-purple-600 via-purple-300 to-purple-100"></div>

      {/* ====== PROBLEM CARDS ====== */}
      <div className="w-full max-w-[1200px] min-h-[660px] mt-1 bg-[#111111] rounded-[50px] p-5 sm:p-8 text-white">
        <div className="flex justify-center mb-10 mt-4">
          <div className="flex items-center bg-[#ffffff1a] text-white text-base px-4 py-2 rounded-full">
            <span className="mr-2">
              {t("vocalchat.stopLosing") || "Stop losing leads"}
            </span>
            <CiWavePulse1
              size={22}
              className="text-white opacity-90 wave-dotted"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`relative ${
                num === 2
                  ? "bg-[#6b43f233]"
                  : "bg-[#111111]"
              } p-6 rounded-4xl text-left min-h-[380px] sm:min-h-[480px] flex flex-col justify-between items-center`}
            >
              <div>
                <h3 className="text-[28px] font-medium mb-3 text-left whitespace-pre-line">
                  {t(`vocalchat.problem${num}Title`) || `Problem ${num}`}
                </h3>
                <p className="text-gray-400 text-base text-left whitespace-pre-line">
                  {t(`vocalchat.problem${num}Desc`) ||
                    `Description of problem ${num}.`}
                </p>
              </div>
              <img
                src={`/images/agents/${num}.png`}
                alt={`Problem ${num}`}
                className="object-cover mt-5 rounded-xl w-36 h-36 sm:w-44 sm:h-44 scale-120"
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
                    className="text-[clamp(10px,1.5vw,16px)] flex items-center justify-center gap-1.5 px-6 py-3 rounded-2xl bg-white text-black border border-gray-200 hover:bg-purple-100 hover:border-gray-300 transition-all duration-300 cursor-pointer"
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
