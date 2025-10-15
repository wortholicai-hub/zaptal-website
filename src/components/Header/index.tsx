"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("nl");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
        <div className="relative container mx-auto flex items-center justify-between px-[4%] md:px-[0%]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 sm:gap-0">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="w-12 h-12 sm:w-9 sm:h-9 md:w-18 md:h-18 object-contain"
            />
            <motion.h3
              className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold tracking-wide text-black"
              // whileHover={{ scale: 1.05 }}
            >
              Pionier
            </motion.h3>
          </Link>

          {/* Center Nav Links */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full hidden md:flex items-center space-x-4 lg:space-x-4">
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

          {/* Right Section: Book a Call + Language */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener"
              className={sharedButtonStyle}
              // whileHover={{ scale: 1.05 }}
            >
              Book a Call
            </motion.a>

            <motion.div
              className={sharedButtonStyle}
              // whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-6 h-6 text-black mr-1" />
              <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                {["nl", "en"].map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-0.5 text-[14px] font-medium transition-all ${
                      language === lang
                        ? "bg-black text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                    // whileHover={{ scale: 1.05 }}
                  >
                    {lang.toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md border border-gray-300 bg-white/70 backdrop-blur-sm"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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

              <div className="mt-4 flex items-center gap-2">
                <motion.a
                  href="https://calendly.com/angelo-vocalchat/consultationcall"
                  target="_blank"
                  rel="noopener"
                  className={sharedButtonStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  Book a Call
                </motion.a>

                <motion.div
                  className={sharedButtonStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="w-4 h-4 text-black mr-1" />
                  <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                    {["nl", "en"].map((lang) => (
                      <motion.button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-2 py-0.5 text-[11px] font-medium transition-all ${
                          language === lang
                            ? "bg-black text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {lang.toUpperCase()}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-12 sm:h-16 md:h-20" />
    </>
  );
}
