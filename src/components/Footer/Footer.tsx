import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
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
    <footer className="w-full bg-white py-8 md:py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Large background text */}
        <div className="relative mb-2 md:mb-16 text-center">
          <h2 className="w-full text-[20vw] font-bold text-gray-200 leading-none select-none whitespace-nowrap overflow-hidden">
            Pionier
          </h2>
          <div className="mt-[-30px] md:mt-[-100px] h-8 md:h-30 bg-white blur-[14px] md:blur-[28px] opacity-90"></div>
        </div>

        {/* Footer content */}
        <div className="flex flex-row justify-between items-center gap-6">
          {/* Privacy Policy */}
          <div className="flex items-center group cursor-pointer">
            <Image
              height={64}
              width={64}
              src="/images/logo/logo.png"
              alt="privacy"
            />
            <Link
              href="/privacy-policy"
              className="text-gray-500 text-lg font-medium"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Book a Call Button */}
          <button className="flex items-center gap-2 text-gray-900 text-lg font-medium hover:opacity-70 transition-opacity duration-200 group cursor-pointer">
            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
            >
              Book a Call
            </a>
            <DottedArrowUpRight />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
