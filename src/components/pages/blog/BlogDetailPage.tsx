/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";

import { useState } from "react";

const tocItems = [
  { label: "Exploring Generative AI in Content Creation", id: "generative-ai" },
  { label: "Steering Clear of Common AI Writing Pitfalls", id: "ai-pitfalls" },
  {
    label: "Understanding ChatGPT Capabilities – Define Your Style",
    id: "chatgpt-style",
  },
  { label: "Understand Your Readers", id: "understand-readers" },
  {
    label: "Creating Quality AI-powered Blogs That Stand Out",
    id: "quality-ai-blogs",
  },
  { label: "Conclusion: Embracing AI in Blog Creation", id: "conclusion" },
  { label: "Afterword: The AI behind This Article", id: "afterword" },
];

export default function BlogDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (id: string, index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="xl:max-w-screen-2xl mx-auto px-6 xl:px-16">
          {/* ===== BREADCRUMB ===== */}
          <nav className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[#F8F8F8] px-4 py-2 rounded-lg text-xs font-medium text-gray-500">
              <span className="hover:text-[#F4A51C] cursor-pointer">Home</span>
              <span>›</span>
              <span className="hover:text-[#F4A51C] cursor-pointer">Blog</span>
              <span>›</span>
              <span className="text-[#F4A51C]">Blog Details</span>
            </div>
          </nav>

          <div className="flex flex-col xl:flex-row gap-12">
            {/* ================= LEFT CONTENT ================= */}
            <div className="xl:w-[68%] w-full">
              {/* Featured Image */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
                <Image
                  src={Images.blogimg}
                  alt="AI DJ Mixer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#22558B] font-semibold text-sm uppercase tracking-wider">
                  Technology
                </span>
                <span className="w-8 h-px bg-gray-300"></span>
                <span className="text-gray-400 text-sm">21 Feb, 2024</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-8 leading-tight">
                How AI is Changing the Way We Work and Live
              </h1>

              {/* Content Body */}
              <div className="space-y-8 text-gray-600 text-base leading-relaxed">
                <section id="generative-ai">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Exploring Generative AI in Content Creation
                  </h2>
                  <p>
                    Hello there! As a marketing manager in the SaaS industry,
                    you might be looking for innovative ways to engage your
                    audience. I bet generative AI has crossed your mind as an
                    option for creating content. Well, let me share from my
                    firsthand experience.
                  </p>
                  <p className="mt-4">
                    Google encourages high-quality blogs regardless of whether
                    they are{" "}
                    <span className="text-[#22558B] underline cursor-pointer">
                      written by humans or created using artificial intelligence
                    </span>{" "}
                    like ChatGPT. Here&apos;s what matters: producing original
                    material with expertise and trustworthiness based on Google
                    E-E-A-T principles.
                  </p>
                </section>

                <section id="ai-pitfalls">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Steering Clear of Common AI Writing Pitfalls
                  </h2>
                  <p>
                    Jumping headfirst into using AI, like{" "}
                    <span className="text-[#22558B] underline">ChatGPT</span>,
                    without a content strategy can lead to some unfortunate
                    results. One common pitfall I&apos;ve seen is people opting
                    for quantity over quality – they churn out blogs, but each
                    one feels robotic and soulless, reading just like countless
                    others on the internet.
                  </p>
                </section>

                <section id="chatgpt-style">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Understanding ChatGPT Capabilities – Define Your Style
                  </h2>
                  <p>
                    One strategic move I&apos;ve seen work wonders is defining
                    your unique writing style first before handing over the
                    reins to AI. In accordance with{" "}
                    <span className="text-[#22558B] underline">TechTarget</span>
                    , AI works best when given clear instructions on who you are
                    targeting.
                  </p>
                </section>

                <section id="understand-readers">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Understand Your Readers
                  </h2>
                  <p>
                    Understand your readers is the first step in producing
                    blogs. Hi, everyone! Filling a gap with expertise based on
                    our own experience could truly make things better.
                  </p>
                </section>

                <section id="quality-ai-blogs">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Creating Quality AI-powered Blogs That Stand Out
                  </h2>
                  <p>
                    Creating brilliant AI-powered blogs is a fun blending of
                    logic with just the right dose of creativity. From defining
                    your target audience to tuning in ChatGPT&apos;s language
                    style, every step counts.
                  </p>
                </section>

                <section id="conclusion">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Conclusion: Embracing AI in Blog Creation
                  </h2>
                  <p>
                    As we wrap up, let’s remember the heart of blog creation is
                    serving our readers. Whether a post was drafted by experts
                    or AI doesn&apos;t matter to Google algorithms as long as
                    it&apos;s meaningful.
                  </p>
                </section>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <aside className="xl:w-[32%] w-full">
              <div className="sticky top-10 space-y-8">
                {/* TOC Card */}
                <div className="bg-[#F9F9F9] rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-6 border-b pb-4">
                    In this article
                  </h3>
                  <ul className="space-y-5">
                    {tocItems.map((item, index) => (
                      <li
                        key={item.id}
                        onClick={() => handleScroll(item.id, index)}
                        className="group cursor-pointer flex items-start gap-3"
                      >
                        <div
                          className={`mt-1.5 h-4 w-1 rounded-full shrink-0 transition-colors ${
                            activeIndex === index
                              ? "bg-[#22558B]"
                              : "bg-transparent group-hover:bg-gray-200"
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors ${
                            activeIndex === index
                              ? "text-[#22558B] font-bold"
                              : "text-gray-600 hover:text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Social Share Box (Inside Sidebar now as per UI) */}
                  <div className="mt-10 bg-[#7444BC] rounded-xl p-5 text-white">
                    <p className="text-sm font-medium mb-4">
                      Share with our community!
                    </p>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                        <span className="font-bold text-xl">f</span>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                        <span className="font-bold text-xl">𝕏</span>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                        <span className="font-bold text-xl">in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
