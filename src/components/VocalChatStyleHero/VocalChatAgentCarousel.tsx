"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface AgentDetails {
  name: string;
  role: string;
  description: string;
}

interface Agent {
  id: number;
  src: string;
  audio: string;
  details: AgentDetails;
}

const agents: Agent[] = [
  {
    id: 1,
    src: "/images/ai-voice/Amira.png",
    audio: "/audio/ai-voice/EN/Amira.mp3",
    details: {
      name: "Amira - AI Receptionist",
      role: "Clinic Reception Agent",
      description: "Amira answers patient calls, collects intent, and routes requests clearly.",
    },
  },
  {
    id: 2,
    src: "/images/ai-voice/Casper.png",
    audio: "/audio/ai-voice/EN/Casper.mp3",
    details: {
      name: "Casper - Scheduling Agent",
      role: "Appointment Coordinator",
      description: "Casper helps patients book, reschedule, and confirm appointments.",
    },
  },
  {
    id: 3,
    src: "/images/ai-voice/Thalina.png",
    audio: "/audio/ai-voice/EN/Thalina.mp3",
    details: {
      name: "Thalina - Recall Agent",
      role: "Patient Recall Agent",
      description: "Thalina follows up with overdue patients and unfinished treatment plans.",
    },
  },
  {
    id: 4,
    src: "/images/ai-voice/Heleen.png",
    audio: "/audio/ai-voice/EN/Heleen.mp3",
    details: {
      name: "Heleen - Analytics Agent",
      role: "Clinic Insights Agent",
      description: "Heleen turns call and booking data into clear operational insights.",
    },
  },
  {
    id: 5,
    src: "/images/ai-voice/Zelda.png",
    audio: "/audio/ai-voice/EN/Zelda.mp3",
    details: {
      name: "Zelda - Patient Care Agent",
      role: "Follow-up Agent",
      description: "Zelda keeps patients informed with reminders and post-visit check-ins.",
    },
  },
  {
    id: 6,
    src: "/images/ai-voice/Carla.png",
    audio: "/audio/ai-voice/EN/Carla.mp3",
    details: {
      name: "Carla - Intake Agent",
      role: "New Patient Intake",
      description: "Carla gathers key details before the visit and guides patients to next steps.",
    },
  },
  {
    id: 7,
    src: "/images/ai-voice/Selena.png",
    audio: "/audio/ai-voice/EN/Selena.mp3",
    details: {
      name: "Selena - Routing Agent",
      role: "Smart Transfer Agent",
      description: "Selena identifies urgency and routes patients to the right team member.",
    },
  },
  {
    id: 8,
    src: "/images/ai-voice/Tirza.png",
    audio: "/audio/ai-voice/EN/Tirza.mp3",
    details: {
      name: "Tirza - Workflow Agent",
      role: "Automation Coordinator",
      description: "Tirza updates tasks, reminders, and connected systems after each call.",
    },
  },
  {
    id: 9,
    src: "/images/ai-voice/Bella.png",
    audio: "/audio/ai-voice/EN/Bella.mp3",
    details: {
      name: "Bella - Reactivation Agent",
      role: "Patient Growth Agent",
      description: "Bella re-engages inactive patients with timely voice and message outreach.",
    },
  },
  {
    id: 10,
    src: "/images/ai-voice/Bastian.png",
    audio: "/audio/ai-voice/EN/Bastian.mp3",
    details: {
      name: "Bastian - Support Agent",
      role: "Patient Support Agent",
      description: "Bastian answers routine questions with calm, consistent clinic-approved guidance.",
    },
  },
];

const VocalChatAgentCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = (): void => {
    setShowDetail(true);
    setCurrent((p) => (p === 0 ? agents.length - 1 : p - 1));
  };

  const nextSlide = (): void => {
    setShowDetail(true);
    setCurrent((p) => (p === agents.length - 1 ? 0 : p + 1));
  };

  const hideDetailUnlessMovingWithinCarousel = (
    nextTarget: EventTarget | null
  ): void => {
    if (
      nextTarget instanceof Node &&
      (detailRef.current?.contains(nextTarget) ||
        controlsRef.current?.contains(nextTarget))
    ) {
      return;
    }
    setShowDetail(false);
  };

  const togglePlay = (): void => {
    setShowDetail(true);
    setIsPlaying((prev) => !prev);
  };

  const getPosition = (i: number): "center" | "left" | "right" | "hidden" => {
    if (i === current) return "center";
    if (i === (current - 1 + agents.length) % agents.length) return "left";
    if (i === (current + 1) % agents.length) return "right";
    return "hidden";
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const target = e.target as Node;
      if (
        detailRef.current &&
        !detailRef.current.contains(target) &&
        !controlsRef.current?.contains(target)
      ) {
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
      className="relative w-full min-h-[500px] md:min-h-[560px] h-full flex flex-col items-center justify-center overflow-hidden
                        px-[4%] md:px-[0%] mb-9"
    >
      <div className="relative w-full h-full max-w-[1200px] mx-auto flex flex-col items-center justify-center z-[1] bg-transparent">
        <div className="relative flex items-center justify-center w-full">
          {agents.map((agent, idx) => {
            const pos = getPosition(idx);
            const isCenter = pos === "center";
            const agentData = agent.details;

            let transformValue = "";
            let opacityValue = 0;
            let zIndexValue = 0;

            if (pos === "center") {
              transformValue = "translateX(0) scale(1.28)";
              opacityValue = 1;
              zIndexValue = 30;
            } else if (pos === "left") {
              transformValue = "translateX(-305px) scale(0.92)";
              opacityValue = 0.3;
              zIndexValue = 30;
            } else if (pos === "right") {
              transformValue = "translateX(305px) scale(0.92)";
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
                  className="relative h-[340px] w-[250px] overflow-hidden md:h-[390px] md:w-[260px]"
                  style={{ borderRadius: "22px" }}
                  onMouseOver={() => setShowDetail(true)}
                  onMouseLeave={(e) =>
                    hideDetailUnlessMovingWithinCarousel(e.relatedTarget)
                  }
                >
                  <img
                    src={agent.src}
                    alt={agentData.name}
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
                  {isCenter && (
                    <div
                      ref={detailRef}
                      className="absolute inset-0 flex flex-col items-start justify-start overflow-hidden px-4 pt-4 text-left transition-all duration-500 ease-out"
                      onMouseLeave={(e) =>
                        hideDetailUnlessMovingWithinCarousel(e.relatedTarget)
                      }
                      style={{
                        transform: showDetail
                          ? "scale(1)"
                          : "scale(0.96)",
                        opacity: showDetail ? 1 : 0,
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.34) 58%, rgba(255,255,255,0.16) 78%, rgba(255,255,255,0) 100%)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "22px",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.55) 76%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.55) 76%, transparent 100%)",
                      }}
                    >
                      <p className="mb-2 text-[15px] font-semibold text-purple-500">
                        {agentData.role}
                      </p>
                      <p className="mb-3 text-[13px] leading-snug text-gray-600">
                        {agentData.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div
            ref={controlsRef}
            className="absolute mt-[17.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
            onMouseEnter={() => setShowDetail(true)}
            onMouseLeave={(e) =>
              hideDetailUnlessMovingWithinCarousel(e.relatedTarget)
            }
          >
            <div className="h-[40px] flex items-center justify-center">
              <div className="border px-[1px] py-[1px] rounded-[14px] border-gray-300 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onMouseEnter={() => setShowDetail(true)}
                  className="flex items-center gap-x-2 whitespace-nowrap rounded-[12px] border border-[#1111114D] bg-white px-3 py-[8px] text-[11px] font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-md sm:text-[12px] md:text-[13px] lg:text-[15px]"
                >
                  {agents[current].details.name}
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setShowDetail(true)}
                  className="px-3 py-2 border border-gray-400 rounded-[8px] bg-white mt-[2px] "
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={togglePlay}
                  onMouseEnter={() => setShowDetail(true)}
                  className="px-3 py-2 border border-gray-400 rounded-[8px] bg-white mt-[2px]"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="border px-[4px] py-[1px] rounded-[10px] border-gray-300 hover:scale-95 transition  shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setShowDetail(true)}
                  className="px-3 py-2 border border-gray-400 rounded-[8px] bg-white mt-[2px]"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
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
