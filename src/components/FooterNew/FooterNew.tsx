"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, FileText, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

const FooterNew: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // modal open state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic here
    alert(t("footer.modal.submit") + " " + "Form submitted!");
    setIsOpen(false); // close modal after submit
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-[1100px] mx-auto px-4 pb-2 lg:scale-104">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Company Name */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-black text-xl font-bold tracking-wider">
              {t("footer.company")}
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              {t("footer.privacy_policy")}
            </Link>

            <motion.button
              className="px-8 py-3 rounded-2xl text-base font-medium border border-black bg-black text-white hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
            >
              {t("footer.contact_us")}
            </motion.button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">{t("footer.copyright")}</p>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-md p-4">
            <motion.div
              className="bg-white backdrop-blur-lg rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg mx-auto relative shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                {t("footer.modal.title")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <User className="w-5 h-5 text-black mr-2" />
                  <input
                    type="text"
                    placeholder={t("footer.modal.first_name")}
                    required
                    className="w-full outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Last Name */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <User className="w-5 h-5 text-black mr-2" />
                  <input
                    type="text"
                    placeholder={t("footer.modal.last_name")}
                    required
                    className="w-full outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <Mail className="w-5 h-5 text-black mr-2" />
                  <input
                    type="email"
                    placeholder={t("footer.modal.email")}
                    required
                    className="w-full outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <FileText className="w-5 h-5 text-black mr-2" />
                  <textarea
                    placeholder={t("footer.modal.message")}
                    required
                    className="w-full outline-none resize-none text-sm sm:text-base"
                    rows={3}
                  />
                </div>

                {/* File Attachment */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2 cursor-pointer">
                  <Upload className="w-5 h-5 text-black mr-2" />
                  <input
                    type="file"
                    className="w-full outline-none cursor-pointer"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-transparent hover:text-black border border-black transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("footer.modal.submit")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default FooterNew;
