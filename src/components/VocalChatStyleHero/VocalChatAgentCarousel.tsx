"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";

interface Agent {
  id: number;
  src: string;
  audio: string;
  name: string;
  role: string;
  description: string;
  specialty: string;
}

const agents: Agent[] = [
  {
    id: 1,
    src: "images/ai-voice/Amira.png",
    audio: "audio/ai-voice/Amira.mpeg",
    name: "Amira - Receptionist Agent",
    role: "Support Agent",
    description: "Amira delivers fast, friendly help with a personal touch.",
    specialty: "24/7 Customer Support",
  },
  {
    id: 2,

    src: "images/ai-voice/Casper.png",
    audio: "audio/ai-voice/Casper.mpeg",
    name: "Casper - Support Agent",
    role: "Receptionist Agent",
    description: "Casper quickly fixes and automates technical issues.",
    specialty: "System Diagnostics & Automation",
  },
  {
    id: 3,
    src: "images/ai-voice/Thalina.png",
    audio: "audio/ai-voice/Thalina.mpeg",
    name: "Thalina - Sales Agent",
    role: "Sales Agent",
    description: "Thalina guides customers with smart product suggestions.",
    specialty: "Product Recommendations & Upselling",
  },
  {
    id: 4,
    src: "images/ai-voice/Heleen.png",
    audio: "audio/ai-voice/Heleen.mpeg",
    name: "Heleen - Promotion Agent",
    role: "Promotion Agent",
    description: "Heleen turns data into insights for better decisions.",
    specialty: "Business Intelligence & Reporting",
  },
  {
    id: 5,
    src: "images/ai-voice/Zelda.png",
    audio: "audio/ai-voice/Zelda.mpeg",
    name: "Zelda - Client Service Agent",
    role: "Client Service Agent",
    description: "Zelda builds loyalty through warm, engaging chats.",
    specialty: "Customer Retention & Loyalty",
  },
  {
    id: 6,
    src: "images/ai-voice/Carla.png",
    audio: "audio/ai-voice/Carla.mpeg",
    name: "Carla - Onboarding Agent",
    role: "Onboarding Agent",
    description: "Carla makes onboarding easy and effortless.",
    specialty: "User Activation & Training",
  },
  {
    id: 7,
    src: "images/ai-voice/Selena.png",
    audio: "audio/ai-voice/Selena.mpeg",
    name: "Selena - AI Trainer",
    role: "AI Trainer",
    description: "Selena fine-tunes models for smarter performance.",
    specialty: "Model Optimization & Learning",
  },
  {
    id: 8,
    src: "images/ai-voice/Tirza.png",
    audio: "audio/ai-voice/Tirza.mpeg",
    name: "Tirza - Product Sales Agent",
    role: "Product Sales Agent",
    description: "Tirza streamlines workflows for smooth operations.",
    specialty: "Process Automation & Efficiency",
  },
  {
    id: 9,
    src: "images/ai-voice/Bella.png",
    audio: "audio/ai-voice/Bella.mpeg",
    name: "Bella - Marketing Agent",
    role: "Marketing Agent",
    description: "Bella drives engagement with creative campaigns.",
    specialty: "Campaign Management & Outreach",
  },
  {
    id: 10,
    src: "images/ai-voice/Bastian.png",
    audio: "audio/ai-voice/Bastian.mpeg",
    name: "Bastian - AI Customer Support",
    role: "AI Customer Support",
    description: "Bastian solves customer queries with care and accuracy.",
    specialty: "Empathetic Real-time Support",
  },
];

const VocalChatAgentCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = (): void => {
    setShowDetail(false);
    setCurrent((p) => (p === 0 ? agents.length - 1 : p - 1));
  };

  const nextSlide = (): void => {
    setShowDetail(false);
    setCurrent((p) => (p === agents.length - 1 ? 0 : p + 1));
  };

  const togglePlay = (): void => setIsPlaying((prev) => !prev);

  const getPosition = (i: number): "center" | "left" | "right" | "hidden" => {
    if (i === current) return "center";
    if (i === (current - 1 + agents.length) % agents.length) return "left";
    if (i === (current + 1) % agents.length) return "right";
    return "hidden";
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (detailRef.current && !detailRef.current.contains(e.target as Node)) {
        setShowDetail(false);
      }
    };
    if (showDetail) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDetail]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = agents[current].audio;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [current, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = (): void => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section
      className="relative w-full min-h-[540px] md:min-h-[620px] h-full flex flex-col items-center justify-center overflow-hidden
                        px-[4%] md:px-[0%] mb-9"
    >
      <div className="relative w-full h-full max-w-[1200px] mx-auto flex flex-col items-center justify-center z-[1] bg-transparent">
        <div className="relative flex items-center justify-center w-full">
          {agents.map((agent, idx) => {
            const pos = getPosition(idx);
            const isCenter = pos === "center";

            let transformValue = "";
            let opacityValue = 0;
            let zIndexValue = 0;

            if (pos === "center") {
              transformValue = "translateX(0) scale(1.4)";
              opacityValue = 1;
              zIndexValue = 30;
            } else if (pos === "left") {
              transformValue = "translateX(-360px) scale(1)";
              opacityValue = 0.3;
              zIndexValue = 30;
            } else if (pos === "right") {
              transformValue = "translateX(360px) scale(1)";
              opacityValue = 0.3;
              zIndexValue = 30;
            }

            return (
              <div
                key={agent.id}
                className="absolute transition-all duration-700 ease-in-out mt-6 h-fit"
                style={{
                  transform: transformValue,
                  opacity: opacityValue,
                  zIndex: zIndexValue,
                  pointerEvents: isCenter ? "auto" : "none",
                }}
              >
                <div
                  className="relative w-[300px] h-[400px] md:h-[460px] overflow-hidden "
                  style={{ borderRadius: "28px" }}
                  onMouseOver={() => setShowDetail(true)}
                  onMouseLeave={() => setShowDetail(false)}
                >
                  <img
                    src={agent.src}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(70% 70% at 50% 30%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.6) 70%, rgb(255,255,255) 100%),
                        linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,0.9) 90%, rgb(255,255,255) 100%)
                      `,
                    }}
                  />
                  {/* showDetail */}
                  {isCenter && (
                    <div
                      ref={detailRef}
                      className="absolute left-1/2 top-1/2 flex flex-col items-start text-left px-4 py-25 transition-all duration-500 ease-out border border-gray-100"
                      onMouseLeave={() => setShowDetail(false)}
                      style={{
                        transform: showDetail
                          ? "translate(-50%, -50%) scale(1)"
                          : "translate(-50%, -40%) scale(0.95)",
                        opacity: showDetail ? 1 : 0,
                        background: "rgba(255,255,255,0.35)",
                        backdropFilter: "blur(6px)",
                        width: "80%",
                        borderRadius: "10px",
                      }}
                    >
                      <h4 className="text-[14px] font-medium mb-1 text-gray-800">
                        {agent.name}
                      </h4>
                      <p className="text-[12px] text-purple-500 font-medium mb-2">
                        {agent.role}
                      </p>
                      <p className="text-[10px] text-gray-600 mb-3 leading-snug">
                        {agent.description}
                      </p>
                      <div className="pt-2 border-t border-gray-300 w-full">
                        <p className="text-[9px] font-semibold text-gray-700">
                          Specialty
                        </p>
                        <p className="text-[10px] text-gray-800">
                          {agent.specialty}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Controls */}
          <div className="absolute mt-[20rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
            <div className="h-[40px] flex items-center justify-center">
              {!showDetail && (
                <div className="border px-[1px] py-[1px] rounded-[14px] border-gray-300 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                  <button
                    className="px-2 py-[8px] text-[10px] sm:text-[11px] md:text-[13px] lg:text-base font-medium rounded-[12px] bg-white border border-[#1111114D] text-gray-700 whitespace-nowrap flex items-center gap-x-2 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    {agents[current].name}
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={prevSlide}
                  className="px-2 py-1 border border-gray-400 rounded-[8px] bg-white mt-[2px] "
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={togglePlay}
                  className="px-2 py-1 border border-gray-400 rounded-[8px] bg-white mt-[2px]"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Play className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={nextSlide}
                  className="px-2 py-1 border border-gray-400 rounded-[8px] bg-white mt-[2px]"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} />
    </section>
  );
};

export default VocalChatAgentCarousel;
