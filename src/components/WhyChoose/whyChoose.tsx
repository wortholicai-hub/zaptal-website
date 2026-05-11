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
      icon: <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-black" />,
      title: t("Always Available, Always Engaged"),
      desc: [
        t(
          "Customers expect instant answers. With Zaptal, your brand is present around the clock, responding to questions, guiding buyers, and capturing opportunities, even when your team is offline."
        ),
        t(
          "Deliver faster service, higher satisfaction, and more closed deals without extra overhead."
        ),
      ],
      button: true,
      large: true,
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
    <section className="relative py-8 md:py-20 px-[4%] md:px-[0%] overflow-hidden bg-white">
      <div className="container max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
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
              className={`relative border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between bg-white
                ${card.large ? "lg:row-span-2" : ""}
                ${card.wide ? "lg:col-span-2" : ""}
              `}
            >
              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                  {card.icon}
                  <h3 className="text-xl sm:text-2xl font-bold text-black leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                {Array.isArray(card.desc) ? (
                  card.desc.map((d, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 last:mb-0"
                    >
                      {d}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {card.desc}
                  </p>
                )}

                {/* CTA Button */}
                {card.button && (
                  <div className="mt-6 sm:mt-8">
                    <Link href="/contactus">
                      <button className="bg-black hover:bg-primary-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors duration-300 text-sm sm:text-base cursor-pointer">
                        {t("Try it for free")}
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
