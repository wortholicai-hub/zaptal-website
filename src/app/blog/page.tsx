"use client";

import {
  Clock,
  ArrowRight,
  Calendar,
  User,
  Mic,
  LineChart,
  Workflow,
  Plug,
  Database,
  Target,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();

  const blogs = [
    {
      title: t("blog.posts.ai_voice.title"),
      excerpt: t("blog.posts.ai_voice.excerpt"),
      author: "Sarah Mitchell",
      date: "Oct 1, 2025",
      readTime: "5 min read",
      category: t("blog.posts.ai_voice.category"),
      icon: Mic,
    },
    {
      title: t("blog.posts.crm_automation.title"),
      excerpt: t("blog.posts.crm_automation.excerpt"),
      author: "Michael Chen",
      date: "Sep 28, 2025",
      readTime: "7 min read",
      category: t("blog.posts.crm_automation.category"),
      icon: LineChart,
    },
    {
      title: t("blog.posts.custom_workflows.title"),
      excerpt: t("blog.posts.custom_workflows.excerpt"),
      author: "Emma Rodriguez",
      date: "Sep 25, 2025",
      readTime: "6 min read",
      category: t("blog.posts.custom_workflows.category"),
      icon: Workflow,
    },
    {
      title: t("blog.posts.ai_integration.title"),
      excerpt: t("blog.posts.ai_integration.excerpt"),
      author: "David Kumar",
      date: "Sep 22, 2025",
      readTime: "8 min read",
      category: t("blog.posts.ai_integration.category"),
      icon: Plug,
    },
    {
      title: t("blog.posts.data_intelligence.title"),
      excerpt: t("blog.posts.data_intelligence.excerpt"),
      author: "Lisa Thompson",
      date: "Sep 19, 2025",
      readTime: "6 min read",
      category: t("blog.posts.data_intelligence.category"),
      icon: Database,
    },
    {
      title: t("blog.posts.lead_generation.title"),
      excerpt: t("blog.posts.lead_generation.excerpt"),
      author: "James Wilson",
      date: "Sep 16, 2025",
      readTime: "9 min read",
      category: t("blog.posts.lead_generation.category"),
      icon: Target,
    },
    {
      title: t("blog.posts.security.title"),
      excerpt: t("blog.posts.security.excerpt"),
      author: "Rachel Park",
      date: "Sep 13, 2025",
      readTime: "7 min read",
      category: t("blog.posts.security.category"),
      icon: Shield,
    },
    {
      title: t("blog.posts.scaling_business.title"),
      excerpt: t("blog.posts.scaling_business.excerpt"),
      author: "Tom Anderson",
      date: "Sep 10, 2025",
      readTime: "10 min read",
      category: t("blog.posts.scaling_business.category"),
      icon: TrendingUp,
    },
  ];

  return (
    <div className="text-black w-full">
      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
        {/* Hero Section */}
        <section className="relative w-full py-14 md:py-20 sm:py-20 flex flex-col items-center text-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gray-200/40 rounded-full blur-3xl -top-20 sm:-top-32 -right-16 sm:-right-32 animate-pulse"></div>
          <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gray-300/30 rounded-full blur-3xl -bottom-10 -left-10 sm:-left-20 animate-pulse"></div>

          <div className="max-w-4xl mx-auto relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-5 leading-tight">
              {t("blog.hero.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t("blog.hero.description")}
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="w-full py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {blogs.map((blog, index) => {
              const IconComponent = blog.icon;
              return (
                <div
                  key={index}
                  className="border border-black/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-black/5 hover:bg-black/10 hover:border-black/40 transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col"
                >
                  {/* Icon Area */}
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <IconComponent
                      className="w-16 sm:w-20 h-16 sm:h-20 text-black"
                      strokeWidth={1.5}
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-semibold rounded-full">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Author & CTA */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 mt-auto border-t border-black/10">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-xs text-gray-700">
                          {blog.author}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full pb-12">
          <div className="border border-black/20 rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm bg-black/5 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
              {t("blog.newsletter.heading")}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t("blog.newsletter.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto w-full">
              <input
                type="email"
                placeholder={t("blog.newsletter.placeholder")}
                className="flex-1 px-5 sm:px-6 py-3 border-2 border-black/20 rounded-full bg-transparent text-black placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">
                {t("blog.newsletter.button")}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
