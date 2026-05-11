"use client";

import { useState } from "react";
import {
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
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-2 lg:pt-20">
        <div className="grid w-full grid-cols-1 items-start gap-4 lg:grid-cols-[65%_35%]">
          <div className="w-full text-left md:w-[90%]">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] sm:text-4xl lg:text-[54px]">
            <span className="block">Build patient communication</span>
            <span className="block">that works while</span>
            <span className="block">your team is busy.</span>
          </h1>
          </div>
          <div className="flex h-full flex-col items-start gap-4 text-left">
            <p className="mb-2 text-lg leading-8 text-gray-900 md:text-[20px]">
              Tell us about your calls, bookings, recalls, and integrations so
              we can map the best Zaptal workflow.
            </p>
            <a
              href="#demo-form"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">Demo conversation</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  What we review with you
                </h2>
              </div>
              <Route className="h-9 w-9 text-purple-300" strokeWidth={1.5} />
            </div>
            <div className="mt-7 space-y-4">
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
                  className="rounded-[24px] border border-black/10 bg-black/[0.03] p-5 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                      <Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
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
          className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8"
        >
          <div className="mb-7">
            <h2 className="text-3xl font-semibold leading-tight">
              Share your clinic workflow.
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              We will use this context to prepare a relevant demo instead of a
              generic product walkthrough.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-black">
                Full name
              </span>
              <span className="flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.02] p-4 transition-colors focus-within:border-purple-400">
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
              <span className="flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.02] p-4 transition-colors focus-within:border-purple-400">
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
              <span className="flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.02] p-4 transition-colors focus-within:border-purple-400">
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
              <span className="flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.02] p-4 transition-colors focus-within:border-purple-400">
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
            <span className="flex items-start gap-3 rounded-2xl border border-black/15 bg-black/[0.02] p-4 transition-colors focus-within:border-purple-400">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
            >
              Send Request <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
