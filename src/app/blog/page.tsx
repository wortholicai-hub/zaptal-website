"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  GitBranch,
  Headphones,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const featured = {
  category: "Clinic Growth",
  title: "The modern clinic front desk is becoming an AI-powered command center",
  excerpt:
    "A practical look at how AI receptionists, automated follow-ups, smart routing, and integrated dashboards help healthcare teams respond faster and book more patients.",
  readTime: "8 min read",
};

const posts = [
  {
    icon: PhoneCall,
    category: "AI Receptionist",
    title: "How dental clinics recover missed calls with AI voice agents",
    excerpt:
      "Missed calls are often high-intent patients. Learn how clinics can capture details, answer common questions, and move callers toward booked appointments.",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    icon: MessageSquareText,
    category: "SMS and WhatsApp",
    title: "Automating patient follow-ups without sounding robotic",
    excerpt:
      "The best follow-up systems combine timing, personalization, channel preference, and clear escalation rules for clinic staff.",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    icon: GitBranch,
    category: "Workflow Automation",
    title: "A smarter workflow for recalls, reschedules, and confirmations",
    excerpt:
      "Automated reminders and recall campaigns help clinics protect schedules, reduce gaps, and keep patients engaged after treatment.",
    date: "Apr 2026",
    readTime: "7 min read",
  },
  {
    icon: ShieldCheck,
    category: "Compliance",
    title: "What healthcare teams should expect from secure AI communication",
    excerpt:
      "Security, access control, audit visibility, and responsible data handling should be core requirements in every healthcare AI rollout.",
    date: "Apr 2026",
    readTime: "6 min read",
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "The metrics clinic owners should track after launching AI automation",
    excerpt:
      "Call outcomes, response speed, appointment conversion, recall completion, and recovered revenue give teams a clearer view of performance.",
    date: "Mar 2026",
    readTime: "5 min read",
  },
  {
    icon: Headphones,
    category: "Patient Experience",
    title: "Designing AI conversations that feel helpful, calm, and clinical",
    excerpt:
      "Patient-facing automation needs careful scripts, handoff logic, tone control, and simple pathways for urgent requests.",
    date: "Mar 2026",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-2 lg:pt-20">
        <div className="grid w-full grid-cols-1 items-start gap-4 lg:grid-cols-[65%_35%]">
          <div className="w-full text-left md:w-[90%]">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] sm:text-4xl lg:text-[54px]">
            <span className="block">Ideas for clinics</span>
            <span className="block">building faster</span>
            <span className="block">patient communication.</span>
          </h1>
          </div>
          <div className="flex h-full flex-col items-start gap-4 text-left">
            <p className="text-lg leading-8 text-gray-900 md:text-[20px]">
              Strategy, automation guides, and growth playbooks for healthcare
              teams adopting AI receptionist systems.
            </p>
            <div className="grid w-full gap-3 pt-1">
              {[
                "AI receptionist strategy",
                "Appointment automation",
                "Healthcare growth playbooks",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-purple-400 pl-4 text-sm font-medium text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-[32px] border border-black/10 bg-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-[320px] flex-col justify-between bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.42),transparent_38%),linear-gradient(135deg,#111111,#221033)] p-6 sm:p-8">
            <div className="flex justify-end">
              <Stethoscope className="h-10 w-10 text-purple-200" strokeWidth={1.5} />
            </div>
            <div className="mt-16">
              <p className="text-sm text-purple-200">{featured.category}</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                {featured.title}
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <p className="text-base leading-8 text-white/75">{featured.excerpt}</p>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {featured.readTime}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> May 2026
                </span>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm text-black transition-all duration-300 hover:bg-purple-200">
                Read Brief <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Healthcare automation, written for operators.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-gray-600">
            Practical writing for operators who want cleaner patient access,
            stronger appointment conversion, and measurable automation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.title}
                className="group flex min-h-[300px] flex-col rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-purple-50 p-3">
                    <Icon className="h-7 w-7 text-purple-700" strokeWidth={1.5} />
                  </div>
                  <p className="text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-700">
                    {post.category}
                  </p>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-black">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-700">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[32px] border border-black/10 bg-black/[0.03] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <TrendingUp className="h-9 w-9 text-purple-700" strokeWidth={1.5} />
            <h2 className="mt-5 text-3xl font-semibold leading-tight">
              Want a clinic automation strategy for your own business?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700">
              Book a conversation with Zaptal and we will map how AI reception,
              scheduling, missed-call recovery, and follow-ups can fit your
              patient workflow.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm text-white transition-all duration-300 hover:bg-purple-700"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
