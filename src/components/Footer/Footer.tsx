"use client";

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const footerLinks = {
    Platform: [
      "AI Receptionist",
      "Appointment Scheduling",
      "Missed Call Recovery",
      "Analytics Dashboard",
    ],
    Solutions: [
      "Dental Clinics",
      "Medical Clinics",
      "Wellness Centers",
      "Multi-location Groups",
    ],
    Automation: [
      "Patient Follow-ups",
      "Treatment Recall",
      "SMS / WhatsApp",
      "Custom Integrations",
    ],
  };

  const DottedArrowUpRight: React.FC<{ color?: string }> = ({
    color = "white",
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M7 17L17 7m0 0H9m8 0v8" />
    </svg>
  );

  const handleBrandGlowMove = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--footer-glow-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--footer-glow-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black px-4 pt-10 text-white md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,58,242,0.24),transparent_38%),linear-gradient(180deg,rgba(88,28,135,0.18),transparent_48%)]" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-14">
          <div>
            <p className="max-w-md text-base leading-7 text-gray-400 lg:-mt-1">
              AI reception, scheduling, missed-call recovery, recall, and
              workflow automation for dental clinics, medical practices,
              wellness centers, and healthcare growth teams.
            </p>

            <button className="mt-6 flex items-center gap-2 text-white text-lg font-medium hover:text-purple-300 transition-colors duration-200 group cursor-pointer">
              <a
                href="https://calendar.google.com/calendar/u/0/r"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
              <DottedArrowUpRight />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-gray-400 text-base hover:text-purple-300 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 text-base hover:text-purple-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="text-gray-400 text-base hover:text-purple-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 text-base hover:text-purple-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-400 text-base hover:text-purple-300 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="group relative mt-8 text-center"
          onMouseMove={handleBrandGlowMove}
          style={
            {
              "--footer-glow-x": "50%",
              "--footer-glow-y": "50%",
            } as React.CSSProperties
          }
        >
          <h2 className="text-[20vw] font-bold leading-none select-none whitespace-nowrap cursor-default text-white/10">
            Zaptal
          </h2>
          <h2 className="pointer-events-none absolute inset-0 text-[20vw] font-bold leading-none select-none whitespace-nowrap cursor-default text-white/70 opacity-0 transition-opacity duration-150 group-hover:opacity-100 [mask-image:radial-gradient(330px_circle_at_var(--footer-glow-x)_var(--footer-glow-y),black_0%,black_54%,rgba(0,0,0,0.62)_61%,transparent_70%)] [-webkit-mask-image:radial-gradient(330px_circle_at_var(--footer-glow-x)_var(--footer-glow-y),black_0%,black_54%,rgba(0,0,0,0.62)_61%,transparent_70%)]">
            Zaptal
          </h2>
          <h2 className="pointer-events-none absolute inset-0 text-[20vw] font-bold leading-none select-none whitespace-nowrap cursor-default text-purple-300/70 opacity-0 transition-opacity duration-150 group-hover:opacity-100 [mask-image:radial-gradient(180px_circle_at_var(--footer-glow-x)_var(--footer-glow-y),black_0%,black_56%,rgba(0,0,0,0.62)_64%,transparent_73%)] [-webkit-mask-image:radial-gradient(180px_circle_at_var(--footer-glow-x)_var(--footer-glow-y),black_0%,black_56%,rgba(0,0,0,0.62)_64%,transparent_73%)]">
            Zaptal
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
