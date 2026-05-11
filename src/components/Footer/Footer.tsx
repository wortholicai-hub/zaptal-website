import Image from "next/image";
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
    color = "black",
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

  return (
    <footer className="w-full bg-white py-8 md:py-20 px-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative mb-2 md:mb-16 text-center">
          <h2 className="footer-brand-glow w-full text-[20vw] font-bold text-gray-200 leading-none select-none whitespace-nowrap overflow-hidden cursor-default">
            Zaptal
          </h2>
          <div className="mt-[-30px] md:mt-[-100px] h-8 md:h-30 bg-white blur-[14px] md:blur-[28px] opacity-90"></div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-2">
              <Image
                height={64}
                width={64}
                src="/images/logo/logo.png"
                alt="Zaptal"
              />
              <span className="text-2xl font-bold tracking-wide text-black">
                Zaptal
              </span>
            </div>
            <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
              AI reception, scheduling, missed-call recovery, recall, and
              workflow automation for dental clinics, medical practices,
              wellness centers, and healthcare growth teams.
            </p>

            <button className="mt-6 flex items-center gap-2 text-gray-900 text-lg font-medium hover:opacity-70 transition-opacity duration-200 group cursor-pointer">
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
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-black">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-gray-500 text-base hover:text-purple-600 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-black">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 text-base hover:text-purple-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="text-gray-500 text-base hover:text-purple-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-500 text-base hover:text-purple-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-500 text-base hover:text-purple-600 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Zaptal. All rights reserved.</p>
          <p>AI communication infrastructure for modern clinics.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
