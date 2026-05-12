"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@zaptal.ai",
    note: "For partnerships, demos, and platform questions.",
  },
  {
    icon: CalendarCheck,
    title: "Demo Planning",
    detail: "Workflow review included",
    note: "We map your calls, booking flow, follow-ups, and integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    detail: "HIPAA-ready approach",
    note: "Built around controlled access and responsible patient data handling.",
  },
];

const demoChecklist = [
  "AI receptionist and call automation fit",
  "Appointment scheduling and routing rules",
  "Missed call recovery through SMS or WhatsApp",
  "CRM, PMS, and custom integration requirements",
];

const contactSignals = [
  { value: "30 min", label: "workflow review" },
  { value: "4", label: "systems mapped" },
  { value: "1 day", label: "typical response" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Zaptal contact request:", formData);
    alert("Thanks. The Zaptal team will review your request and follow up shortly.");
  };

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-2">
        <div className="pointer-events-none absolute bottom-0 right-[3%] top-0 hidden w-[66%] md:block lg:right-[4%]">
          <Image
            src="/images/pages/contact.svg"
            alt="Clinic team preparing an AI communication demo"
            fill
            priority
            unoptimized
            className="object-contain object-right-center opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-[-7%] top-10 block w-full opacity-20 md:hidden">
          <Image
            src="/images/pages/contact.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="w-full max-w-[660px] text-left">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] sm:text-4xl lg:text-[54px]">
              <span className="block">Build patient communication</span>
              <span className="block">that works while</span>
              <span className="block">your team is busy.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-900 md:text-[20px]">
              Tell us about your calls, bookings, recalls, and integrations so
              we can map the best Zaptal workflow.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {contactSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[14px] border border-black/10 bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-lg font-semibold leading-none text-black">
                    {signal.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">{signal.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#demo-form"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-2">
        <aside className="space-y-5">
          <div className="relative overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#15101f_100%)] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(168,85,247,0.36),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_44%)]" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                  Demo conversation
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  What we review with you
                </h2>
              </div>
              <Sparkles className="h-9 w-9 text-purple-300" strokeWidth={1.5} />
            </div>
            <div className="relative z-10 mt-7 space-y-4">
              {demoChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-300" />
                  <p className="text-sm leading-6 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-[16px] border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#f8f6ff_100%)] p-5 shadow-[0_14px_45px_rgba(0,0,0,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-[14px] bg-black p-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-colors duration-300 group-hover:bg-purple-700">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-purple-700">
                        {card.detail}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {card.note}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <form
          id="demo-form"
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
          <div className="mb-7 flex items-start justify-between gap-5">
            <div>
              <h2 className="text-3xl font-semibold leading-tight">
                Share your clinic workflow.
              </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              We will use this context to prepare a relevant demo instead of a
              generic product walkthrough.
            </p>
            </div>
            <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-[14px] bg-black text-white sm:flex">
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.7} />
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-black">
                Full name
              </span>
              <span className="flex items-center gap-3 rounded-[16px] border border-black/15 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all focus-within:border-purple-400 focus-within:shadow-[0_12px_35px_rgba(124,58,237,0.12)]">
                <User className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-black">
                Work email
              </span>
              <span className="flex items-center gap-3 rounded-[16px] border border-black/15 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all focus-within:border-purple-400 focus-within:shadow-[0_12px_35px_rgba(124,58,237,0.12)]">
                <Mail className="h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@clinic.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-black">
                Phone
              </span>
              <span className="flex items-center gap-3 rounded-[16px] border border-black/15 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all focus-within:border-purple-400 focus-within:shadow-[0_12px_35px_rgba(124,58,237,0.12)]">
                <Phone className="h-5 w-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Clinic phone number"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-black">
                Clinic type
              </span>
              <span className="flex items-center gap-3 rounded-[16px] border border-black/15 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all focus-within:border-purple-400 focus-within:shadow-[0_12px_35px_rgba(124,58,237,0.12)]">
                <Building2 className="h-5 w-5 text-gray-500" />
                <select
                  name="clinicType"
                  value={formData.clinicType}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm outline-none"
                  required
                >
                  <option value="">Select clinic type</option>
                  <option value="Dental clinic">Dental clinic</option>
                  <option value="Medical clinic">Medical clinic</option>
                  <option value="Wellness center">Wellness center</option>
                  <option value="Multi-location healthcare">Multi-location healthcare</option>
                </select>
              </span>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-black">
              What should Zaptal automate first?
            </span>
            <span className="flex items-start gap-3 rounded-[16px] border border-black/15 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all focus-within:border-purple-400 focus-within:shadow-[0_12px_35px_rgba(124,58,237,0.12)]">
              <MessageSquareText className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Example: missed calls, appointment booking, recalls, SMS follow-ups, PMS integration..."
                rows={6}
                className="w-full resize-none bg-transparent text-sm leading-6 outline-none placeholder:text-gray-400"
                required
              />
            </span>
          </label>

          <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock3 className="h-5 w-5 text-purple-700" />
              <span>Typical response within one business day.</span>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-9 py-3.5 text-sm text-white transition-all duration-300 hover:bg-purple-700"
            >
              Send Request <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
