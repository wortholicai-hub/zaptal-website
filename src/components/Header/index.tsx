"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { name: t("header.home"), href: "/" },
    { name: t("header.about"), href: "/about" },
    { name: t("header.blog"), href: "/blog" },
    { name: t("header.contact"), href: "/contactus" },
  ];

  const sharedButtonStyle =
    "flex items-center justify-center px-8 py-2 rounded-2xl border border-gray-300 bg-white/80 text-black font-medium text-base backdrop-blur-sm hover:bg-purple-100 transition-all duration-300";

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full py-1 bg-white/30 backdrop-blur-lg z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative mx-auto grid h-20 w-full max-w-[1120px] grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-4">
          <Link href="/" className="flex min-w-[142px] items-center justify-self-start">
            <Image
              src="/images/logo/zaptal-logo.svg"
              alt="Zaptal logo"
              width={190}
              height={104}
              priority
              className="h-14 w-auto object-contain sm:h-16 md:h-[68px]"
            />
          </Link>

          <div className="hidden items-center justify-center gap-4 md:flex lg:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-900 hover:text-purple-500 font-medium text-[18px] transition-colors duration-200 ${
                  pathname === link.href ? "text-purple-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-self-end md:flex">
            <motion.a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener"
              className={sharedButtonStyle}
            >
              Book Demo
            </motion.a>
          </div>

          <div className="flex items-center justify-self-end md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-2xl border border-gray-300 bg-white/70 p-2 backdrop-blur-sm"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-lg border-t border-white/30 px-4 py-4 shadow-lg z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-gray-900 hover:text-black font-medium text-[1rem] transition-colors duration-200 ${
                      pathname === link.href ? "text-purple-500" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex items-center">
                <motion.a
                  href="https://calendly.com/angelo-vocalchat/consultationcall"
                  target="_blank"
                  rel="noopener"
                  className={sharedButtonStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  Book Demo
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-20 sm:h-20 md:h-24" />
    </>
  );
}
