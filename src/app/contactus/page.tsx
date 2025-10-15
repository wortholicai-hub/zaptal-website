"use client";
import { useState } from "react";
import {
  User,
  Mail,
  FileText,
  Paperclip,
  Send,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      file: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Form Data:", formData);
    alert(t("contact.messages.success"));
  };

  return (
    <div className="min-h-screen text-black py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-5">
            {t("contact.header.title")}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t("contact.header.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                {t("contact.contactInfo.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {t("contact.contactInfo.subtitle")}
              </p>
            </div>

            {/* Contact Cards */}
            {/* Email */}
            <div className="border border-black/20 rounded-xl p-6 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-black/20 rounded-lg bg-white group-hover:border-black/40 transition-colors">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {t("contact.contactInfo.email.title")}
                  </h3>
                  {(
                    t("contact.contactInfo.email.addresses", {
                      returnObjects: true,
                    }) as string[]
                  ).map((email, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">
                      {email}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Call */}
            <div className="border border-black/20 rounded-xl p-6 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-black/20 rounded-lg bg-white group-hover:border-black/40 transition-colors">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {t("contact.contactInfo.call.title")}
                  </h3>
                  {(
                    t("contact.contactInfo.call.numbers", {
                      returnObjects: true,
                    }) as string[]
                  ).map((number, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">
                      {number}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Visit */}
            <div className="border border-black/20 rounded-xl p-6 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-black/20 rounded-lg bg-white group-hover:border-black/40 transition-colors">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {t("contact.contactInfo.visit.title")}
                  </h3>
                  {(
                    t("contact.contactInfo.visit.address", {
                      returnObjects: true,
                    }) as string[]
                  ).map((line, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border border-black/20 rounded-xl p-6 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-black/20 rounded-lg bg-white group-hover:border-black/40 transition-colors">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {t("contact.contactInfo.hours.title")}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t("contact.contactInfo.hours.weekdays")}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {t("contact.contactInfo.hours.weekend")}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="border border-black/20 rounded-xl p-6 backdrop-blur-sm bg-gradient-to-br from-black/5 to-gray-100/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-black">
                  {t("contact.quickResponse.title")}
                </span>
              </div>
              <p className="text-sm text-gray-700">
                {t("contact.quickResponse.subtitle")}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="border border-black/20 rounded-2xl p-8 backdrop-blur-sm bg-white/80 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {t("contact.form.title")}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t("contact.form.subtitle")}
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("contact.form.firstName")}
                  </label>
                  <div className="flex items-center border-2 border-black/20 rounded-lg p-3 focus-within:border-black transition-colors bg-white">
                    <User className="w-5 h-5 text-gray-600 mr-2" />
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t("contact.form.firstNamePlaceholder")}
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full outline-none text-sm bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("contact.form.lastName")}
                  </label>
                  <div className="flex items-center border-2 border-black/20 rounded-lg p-3 focus-within:border-black transition-colors bg-white">
                    <User className="w-5 h-5 text-gray-600 mr-2" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t("contact.form.lastNamePlaceholder")}
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full outline-none text-sm bg-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("contact.form.email")}
                </label>
                <div className="flex items-center border-2 border-black/20 rounded-lg p-3 focus-within:border-black transition-colors bg-white">
                  <Mail className="w-5 h-5 text-gray-600 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none text-sm bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("contact.form.message")}
                </label>
                <div className="flex items-start border-2 border-black/20 rounded-lg p-3 focus-within:border-black transition-colors bg-white">
                  <FileText className="w-5 h-5 text-gray-600 mr-2 mt-1" />
                  <textarea
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full outline-none resize-none text-sm bg-transparent"
                    rows={5}
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("contact.form.attachment")}
                </label>
                <div className="flex items-center border-2 border-black/20 border-dashed rounded-lg p-4 hover:border-black/40 transition-colors bg-white cursor-pointer">
                  <Paperclip className="w-5 h-5 text-gray-600 mr-2" />
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full text-gray-700 text-sm"
                  />
                </div>
                {formData.file && (
                  <p className="text-xs text-gray-600 mt-2">
                    {t("contact.form.selected")}: {formData.file.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-semibold group hover:shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t("contact.form.submit")}
              </button>

              <p className="text-xs text-gray-600 text-center">
                {t("contact.form.privacy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
