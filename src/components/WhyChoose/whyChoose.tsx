"use client";
import { Settings, Rocket, Users, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const WhyChoose = () => {
  const { t } = useTranslation();

  const bgImage =
    "https://framerusercontent.com/images/BpUgcKlbgozaYrDw9SLXq6Gac.png";

  const cards = [
    {
      icon: <Users className="w-6 h-6 lg:w-8 lg:h-8 text-primary-600" />,
      title: t("Conversations That Connect"),
      desc: t(
        "Our agents speak with customers in a natural, human tone. Every interaction feels personal, building trust and strengthening relationships from the very first message."
      ),
    },
    {
      icon: <Target className="w-6 h-6 lg:w-8 lg:h-8 text-black" />,
      title: t("Turning Leads Into Sales"),
      desc: t(
        "Our platform does more than capture interest. It nurtures prospects with timely follow-ups and tailored responses that move conversations toward real business outcomes."
      ),
    },
    {
      icon: <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-purple-300" />,
      title: t("Always Available, Always Helpful"),
      desc: [
        t(
          "Patients expect quick answers. With Zaptal, your clinic can respond around the clock, guide patients, and recover booking opportunities when the team is busy or offline."
        ),
        t(
          "Deliver faster patient communication, better access, and more completed bookings without extra front-desk pressure."
        ),
      ],
      button: true,
      large: true,
      dark: true,
    },
    {
      icon: <Settings className="w-6 h-6 lg:w-8 lg:h-8 text-black" />,
      title: t("Simple Integration With Your Tools"),
      desc: t(
        "Add Zaptal to your CRM, website, or messaging apps without complex setup. Our platform seamlessly integrates with your existing tools and workflows, allowing you to get started quickly while maintaining operational efficiency. Scale results with zero technical friction and minimal downtime for maximum business impact."
      ),
      wide: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-2">
      <div className="container max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-black font-medium text-[34px] sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            {t("Why Zaptal Leads Growth")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-8 w-full">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{
              //   scale: 1.02,
              //   y: -4,
              //   boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              // }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-[16px] overflow-hidden flex flex-col justify-between
                ${
                  card.dark
                    ? "border border-white/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#171021_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_70px_rgba(0,0,0,0.32)]"
                    : "border border-gray-200 bg-white"
                }
                ${card.large ? "lg:row-span-2" : ""}
                ${card.wide ? "lg:col-span-2" : ""}
              `}
            >
              {card.dark && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_0%,rgba(168,85,247,0.34),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
                  <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-300/45 to-transparent" />
                </>
              )}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                  {card.icon}
                  <h3
                    className={`text-xl sm:text-2xl font-bold leading-snug ${
                      card.dark ? "text-white" : "text-black"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                {Array.isArray(card.desc) ? (
                  card.desc.map((d, idx) => (
                    <p
                      key={idx}
                      className={`text-sm sm:text-base leading-relaxed mb-3 last:mb-0 ${
                        card.dark ? "text-white/75" : "text-gray-700"
                      }`}
                    >
                      {d}
                    </p>
                  ))
                ) : (
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      card.dark ? "text-white/75" : "text-gray-700"
                    }`}
                  >
                    {card.desc}
                  </p>
                )}

                {/* CTA Button */}
                {card.button && (
                  <div className="mt-6 sm:mt-8">
                    <Link href="/contactus">
                      <button
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                          card.dark
                            ? "bg-white text-black hover:bg-purple-200"
                            : "bg-black text-white hover:bg-primary-600"
                        }`}
                      >
                        {t("Book a demo")}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
