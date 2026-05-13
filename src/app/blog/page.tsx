"use client";

import Image from "next/image";
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

const heroTopics = [
  {
    icon: PhoneCall,
    title: "Missed-call recovery",
    detail: "Capture demand before patients call another clinic.",
  },
  {
    icon: Calendar,
    title: "Appointment conversion",
    detail: "Turn intake, reminders, and reschedules into cleaner booking flow.",
  },
  {
    icon: BarChart3,
    title: "Operator metrics",
    detail: "Track response speed, booked appointments, and workflow gaps.",
  },
];

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
      <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-2">
        <div className="pointer-events-none absolute bottom-0 right-[3%] top-2 hidden w-[62%] md:block lg:right-[4%]">
          <Image
            src="/images/pages/blog.svg"
            alt="Doctor reviewing AI clinic communication insights"
            fill
            priority
            unoptimized
            className="object-contain object-right-center opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-[-6%] top-12 block w-[94%] opacity-20 md:hidden">
          <Image
            src="/images/pages/blog.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[70%] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_58%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="w-full max-w-[660px] text-left">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] sm:text-4xl lg:text-[54px]">
              <span className="block">Ideas for clinics</span>
              <span className="block">building faster</span>
              <span className="block">patient communication.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-900 md:text-[20px]">
              Strategy, automation guides, and growth playbooks for healthcare
              teams adopting AI receptionist systems.
            </p>
            <div className="mt-6 grid gap-3">
              {heroTopics.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-[16px] border border-black/10 bg-white/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[11px] bg-black text-white">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-black">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-gray-600">
                        {item.detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 sm:px-6 lg:px-2">
        <article className="group grid overflow-hidden rounded-[16px] border border-black/10 bg-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(92,35,150,0.2)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.42),transparent_38%),linear-gradient(135deg,#111111,#221033)] p-6 sm:p-8">
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-200/50 to-transparent lg:bottom-auto lg:left-auto lg:right-0 lg:top-8 lg:h-[calc(100%-4rem)] lg:w-px lg:bg-gradient-to-b" />
            <div className="flex justify-end">
              <Stethoscope className="h-10 w-10 text-purple-200" strokeWidth={1.5} />
            </div>
            <div className="mt-16">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple-100">
                {featured.category}
              </p>
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
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm text-black transition-all duration-300 hover:bg-purple-200">
                Read Brief <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="relative w-full overflow-hidden bg-black px-4 py-12 sm:px-6 md:py-16 lg:px-2">
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-10 text-center">
            <h2 className="mx-auto text-center text-[24px] font-medium leading-tight text-white min-[420px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] whitespace-nowrap">
              Healthcare automation, written for operators.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.title}
                  className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#111111_0%,#050505_58%,#15101f_100%)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_28px_80px_rgba(124,58,237,0.26),0_22px_55px_rgba(0,0,0,0.5)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
                  <span className="pointer-events-none absolute right-6 top-4 text-[58px] font-semibold leading-none text-white/20 transition-colors duration-300 group-hover:text-white sm:text-[68px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] bg-purple-400/15 text-purple-300">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <p className="max-w-[58%] text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-200">
                      {post.category}
                    </p>
                  </div>

                  <h3 className="relative z-10 mt-6 text-xl font-normal leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-24 lg:px-2">
        <div className="relative z-10 mx-auto flex min-h-[380px] w-full max-w-[1200px] flex-col justify-between gap-10 overflow-hidden rounded-[16px] border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8ff_50%,#f2ecff_100%)] p-8 shadow-[0_30px_95px_rgba(0,0,0,0.1)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-[-130px] top-[-150px] h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
          <div>
            <div className="relative z-10 flex max-w-[1100px] items-start gap-3 sm:gap-4">
              <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[12px] bg-black text-white">
                <TrendingUp className="h-4.5 w-4.5" strokeWidth={1.7} />
              </span>
              <h2 className="min-w-0 text-[23px] font-semibold leading-tight text-black sm:text-[28px] lg:text-[30px]">
                Want a clinic automation strategy for your own business?
              </h2>
            </div>
            <p className="relative z-10 mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Book a conversation with Zaptal and we will map how AI reception,
              scheduling, missed-call recovery, and follow-ups can fit your
              patient workflow.
            </p>
          </div>
          <Link
            href="/contactus"
            className="relative z-10 ml-auto inline-flex w-fit items-center justify-center rounded-full bg-black px-9 py-3.5 text-sm text-white transition-all duration-300 hover:bg-purple-700"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
