"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  GitBranch,
  Headphones,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const posts = [
  {
    icon: PhoneCall,
    category: "AI Receptionist",
    title: "How dental clinics recover missed calls with AI voice agents",
    excerpt:
      "Missed calls are often high-intent patients. Learn how clinics can capture details, answer common questions, and move callers toward booked appointments.",
  },
  {
    icon: MessageSquareText,
    category: "SMS Automation",
    title: "Automating patient follow-ups without sounding robotic",
    excerpt:
      "The best follow-up systems combine timing, personalization, channel preference, and clear escalation rules for clinic staff.",
  },
  {
    icon: GitBranch,
    category: "Workflow Automation",
    title: "A smarter workflow for recalls, reschedules, and confirmations",
    excerpt:
      "Automated reminders and recall campaigns help clinics protect schedules, reduce gaps, and keep patients engaged after treatment.",
  },
  {
    icon: ShieldCheck,
    category: "Compliance",
    title: "What healthcare teams should expect from secure AI communication",
    excerpt:
      "Security, access control, audit visibility, and responsible data handling should be core requirements in every healthcare AI rollout.",
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "The metrics clinic owners should track after launching AI automation",
    excerpt:
      "Call outcomes, response speed, appointment conversion, recall completion, and recovered revenue give teams a clearer view of performance.",
  },
  {
    icon: Headphones,
    category: "Patient Experience",
    title: "Designing AI conversations that feel helpful, calm, and clinical",
    excerpt:
      "Patient-facing automation needs careful scripts, handoff logic, tone control, and simple pathways for urgent requests.",
  },
];

const operatorFocus = [
  "Answer demand during busy clinic hours",
  "Recover patients who leave before booking",
  "Give staff clearer handoffs and follow-up queues",
];

export default function BlogPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-white px-4 py-16 sm:min-h-[600px] sm:px-6 sm:py-20 md:py-24 lg:min-h-[640px] lg:px-2">
        <div className="pointer-events-none absolute bottom-0 right-0 top-4 hidden w-[66%] md:block">
          <Image
            src="/images/pages/blog.svg"
            alt="Doctor reviewing AI clinic communication insights"
            fill
            priority
            unoptimized
            className="object-contain object-right-center opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-10 block w-full opacity-20 md:hidden">
          <Image
            src="/images/pages/blog.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_62%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="w-full max-w-[660px] text-left">
            <h1 className="text-left text-[36px] font-semibold leading-[1.08] text-black sm:text-4xl lg:text-[54px]">
              <span className="block">Ideas for clinics</span>
              <span className="block">building faster</span>
              <span className="block">patient communication</span>
            </h1>
            <div className="mt-7 max-w-2xl">
              <p className="text-lg leading-8 text-gray-900 md:text-[20px]">
                Strategy, automation guides, and growth playbooks for healthcare
                teams adopting AI receptionist systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#f8f7fb] px-4 py-14 sm:px-6 md:py-16 lg:px-2">
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-8 text-center">
            <h2 className="mx-auto text-center text-[24px] font-medium leading-tight text-black min-[420px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Healthcare automation, written for operators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Practical writing for clinic owners, office managers, and teams
              building dependable patient communication workflows.
            </p>
          </div>

          <div className="mb-6 grid overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-black/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <h3 className="text-2xl font-semibold leading-tight text-black sm:text-3xl">
                Clear playbooks for clinics that need action, not theory
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Each guide is written around real front-desk pressure: missed
                calls, slow booking flow, follow-up gaps, and patient handoffs.
              </p>
            </div>
            <div className="grid gap-3 p-6 sm:p-8">
              {operatorFocus.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] border border-black/10 bg-[#fbfaff] px-4 py-3"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-purple-700 text-white">
                    <CheckCircle2 className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </span>
                  <p className="text-sm font-medium leading-6 text-black sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.title}
                  className="group relative overflow-hidden rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-[0_26px_70px_rgba(88,28,135,0.14)]"
                >
                  <span className="pointer-events-none absolute right-6 top-4 text-[58px] font-semibold leading-none text-purple-100 transition-colors duration-300 group-hover:text-purple-200 sm:text-[68px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] bg-purple-700 text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <p className="max-w-[58%] text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-700">
                      {post.category}
                    </p>
                  </div>

                  <h3 className="relative z-10 mt-6 text-xl font-normal leading-snug text-black">
                    {post.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-gray-600">
                    {post.excerpt}
                  </p>
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
            <div className="relative z-10 max-w-[1100px] text-left">
              <div className="min-w-0">
                <h2 className="text-[23px] font-semibold leading-tight text-black sm:text-[28px] lg:text-[30px]">
                  Want a clinic automation strategy for your own business?
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                  Book a conversation with Zaptal and we will map how AI reception,
                  scheduling, missed-call recovery, and follow-ups can fit your
                  patient workflow.
                </p>
              </div>
            </div>
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
