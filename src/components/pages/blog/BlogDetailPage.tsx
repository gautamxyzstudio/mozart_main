"use client";
import { Icons, Images } from "@/public/exports";
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
      <section className="py-12 lg:py-20  xl:px-9">
        <div className="xl:max-w-screen-2xl mx-auto px-6 xl:px-16">
          <nav className="mb-8 md:mt-14 mt-5 ">
            <div className="inline-flex items-center gap-2 bg-[#F8F8F8] px-4 py-2 rounded-lg text-xs font-medium text-gray-500">
              <span className="hover:text-primary cursor-pointer">Home</span>
              <span>›</span>
              <span className="hover:text-primary cursor-pointer">Blog</span>
              <span>›</span>
              <span className="text-primary">Blog Details</span>
            </div>
          </nav>

          {/* ===== 2. FEATURED IMAGE (FULL WIDTH) ===== */}
          <div className="relative w-full aspect-video xl:h-150 rounded-3xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={Images.BlogImg}
              alt="AI DJ Mixer"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ===== 3. CONTENT & SIDEBAR ROW ===== */}
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            <div className="xl:w-[68%] w-full">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-black font-normal leading-6 text-base tracking-wider">
                  Technology
                </span>
                <span className="w-8 h-px bg-[#111]"></span>
                <span className="text-primary text-sm">21 Feb, 2024</span>
              </div>

              <h1 className="text-4xl xl:text-5xl font-medium text-[#2E2E2E] mb-8 leading-tight">
                How AI is Changing the Way We Work and Live
              </h1>

              {/* Content Body */}
              <div className="space-y-8 text-gray-600 text-base leading-relaxed">
                <section id="generative-ai">
                  <h2 className="text-2xl text-black font-medium mb-4">
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
                    <span className="text-primary cursor-pointer">
                      written by humans or created using artificial intelligence
                    </span>{" "}
                    like ChatGPT. Here&apos;s what matters: producing original
                    material with expertise and trustworthiness based on{" "}
                    <span className="text-primary ">
                      Google E-E-A-T principles.
                    </span>
                  </p>

                  <p className="mt-4">
                    This means focusing more on people-first writing rather than
                    primarily employing AI tools to manipulate search rankings.
                    There comes a time when many experienced professionals want
                    to communicate their insights but get stuck due to limited
                    writing skills – that’s where Generative AI can step in.
                  </p>
                  <p className="mt-4">
                    So, together, we’re going explore how this technology could
                    help us deliver valuable content without sounding robotic or
                    defaulting into mere regurgitations of existing materials
                    (spoiler alert – common pitfalls!). Hang tight - it’ll be a
                    fun learning journey!
                  </p>
                </section>

                <section id="ai-pitfalls">
                  <h2 className="text-2xl text-black font-medium mb-4">
                    Steering Clear of Common AI Writing Pitfalls
                  </h2>
                  <p>
                    Jumping headfirst into using AI, like{" "}
                    <span className="text-primary">ChatGPT</span>, without a
                    content strategy can lead to some unfortunate results. One
                    common pitfall I&apos;ve seen is people opting for quantity
                    over quality – they churn out blogs, but each one feels
                    robotic and soulless, reading just like countless others on
                    the internet.
                  </p>

                  <p className="mt-4">
                    Another fault line lies in creating reproductions rather
                    than delivering unique perspectives that offer value to
                    readers; it often happens if you let an AI tool write your
                    full blog unrestrained! Trust me on this – Ask any
                    experienced marketer or writer about their takeaways from
                    using generative AI tools. They&apos;ll all agree that
                    adding a human touch and following specific guidelines are
                    key when implementing these tech pieces.
                  </p>
                  <p className="mt-4">
                    Remember, our goal here isn’t merely satisfying search
                    engines but, more importantly, knowledge-hungry humans
                    seeking reliable information online. So keep your
                    audience&#39;s needs at heart while leveraging technology’s
                    assistance!
                  </p>
                </section>

                <section id="chatgpt-style">
                  <h2 className="text-2xl text-black font-medium mb-4">
                    Understanding ChatGPT Capabilities – Define Your Style
                  </h2>
                  <p>
                    Welcome to the intriguing world of ChatGPT! Its ability and
                    potential can truly be mind-boggling. I have learned from
                    experience how capable it is in dealing with diverse content
                    generation tasks, only that its text sounded slightly
                    &quot;unnatural&quot;{" "}
                    <span className="text-primary">
                      in accordance with TechTarget.
                    </span>{" "}
                    However, fear not – there are ways around this!
                  </p>

                  <p className="mt-4">
                    One strategic move I&apos;ve seen work wonders is defining
                    your unique writing style first before handing over the
                    reins to AI; you treat it like a canvas whereupon our vision
                    opens up. If we clearly instruct who we&apos;re targeting or
                    what tone resonates more effectively, generative AI tools
                    such as ChatGPT will comply remarkably well.
                  </p>

                  <p className="mt-4">
                    In framing guidelines, remember to keep audience interests
                    at heart while adopting technology’s benefits for efficient
                    output – trust me on this because neglecting these aspects
                    could backfire by generating unappealing robotic-like reads.
                  </p>
                  <p className="mt-4">
                    Ultimately, aiming towards reader-focused driven creativity
                    illuminated under authentically humanized narratives holds
                    priority above all else when crafting blogs using
                    auto-generation toolkits!
                  </p>
                </section>

                <section id="understand-readers">
                  <h2 className="text-2xl text-black font-medium mb-4">
                    Understand Your Readers
                  </h2>
                  <p>
                    Understanding your readers is vital when producing blog
                    posts. It&lsquo;s not about filling blanks with popular
                    search terms, no matter how much keyword research you do.
                    Real readability goes beyond that! Your content has to
                    &apos;speak&apos; directly to your target audience.
                  </p>
                  <p className="mt-4">
                    Building an Ideal Customer Profile (ICP) can help immensely
                    in this respect (
                    <span className="text-primary">Dan Martell</span> ). This
                    tool identifies specific firmographics or psychographic
                    drivers behind customer success - a valuable guide for
                    creating targeted outputs catering to arrayed reader types.
                  </p>
                  <p className="mt-4">
                    Simultaneously, SEO aspects also need attention: identifying
                    suitable keywords & phrases people commonly use enhances
                    reach (SEO.COM reference). Yet remember – human appeal
                    doesn’t mean packing text up finely into presentable
                    semblances bearing little value substance and stuffing it
                    full with only ‘keywords.
                  </p>
                </section>

                <section id="quality-ai-blogs">
                  <h2 className="text-2xl text-black font-medium mb-4">
                    Understand Your ReaCreating Quality AI-powered Blogs that
                    Stand Outders
                  </h2>
                  <p>
                    Creating brilliant AI-powered blogs is a fun blending of
                    logic with just the right dose of creativity. From defining
                    your target audience to tuning in ChatGPT&lsquo;s language
                    style, every step counts towards creating content that’s not
                    only SEO-friendly but also enjoyable and valuable for
                    readers.
                  </p>
                  <p className="mt-4">
                    One tactic I’ve found useful is maintaining originality in
                    message essence, with unique perspectives infusing life
                    beyond words onto pages!
                  </p>
                  <p className="mt-4">
                    Incorporating trusted references while optimizing blog posts
                    intelligently (rather than keyword stuffing) can
                    significantly aid quality enhancements. Remember, it
                    isn&apos;t about writing for Google here, so avoid tunnel
                    vision focusing solely on algorithm-driven success rate,
                    aiming at heart-touching human connections, building loyal
                    reader bases, and sharing knowledge benefiting others!
                  </p>
                </section>

                <section id="conclusion">
                  <h2 className="text-2xl text-black font-medium mb-4">
                    Conclusion: Embracing AI in Blog Creation
                  </h2>
                  <p>
                    As we wrap up, let’s remember the heart of blog creation is
                    serving our readers. Whether a post was drafted by experts
                    or AI like ChatGPT doesn&apos;t matter to Google algorithms
                    as long it&apos;s meaningful and high-quality.
                  </p>
                  <p>
                    Through this valuable learning curve together, I hope you’ve
                    seen how well-implemented strategies can guide generative
                    tools in delivering content mirroring human quality. Yes! It
                    often involves some trial & error phases, but trust me –
                    persistence practiced alongside continuous improvements
                    results in rewarding feats!
                  </p>
                  <p>
                    Additionally, perhaps most importantly, proofreading every
                    piece before publishing hugely influences audience
                    perceptions, establishing professional credibility. Why?
                    Well, even minor oversights could potentially undermine
                    reader experiences, turning away prospective subscribers;
                    hence, maintain meticulous checkpoints for flawless
                    publications!
                  </p>
                  <p>
                    So here goes my fellow SaaS marketing managers: Embrace
                    technology enhancement aids responsibly, always keeping
                    end-user perspectives focal while constantly striving
                    towards better communication standards, offering insightful,
                    pleasing read across widespread digital platforms!
                  </p>
                  <p className="mt-4">
                    Let&apos;s be clear: ChatGPT wrote this article and
                    generated the hero image. It combined my personal
                    experience, knowledge, and research. From the initial notes
                    to finish, it took just 37 minutes.
                  </p>
                  <p className="mt-4">
                    Even though it was made by AI, no detection tools could
                    tell. The only thing used was OpenAI&apos;s Chat API, no
                    other external tools.
                  </p>
                  <p className="mt-4">
                    It shows how AI can help in making content interesting and
                    relevant. It&lsquo;s a new chapter in how we create and
                    share information.
                  </p>
                </section>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <aside className="xl:w-[46%] xl:block md:hidden hidden  w-full sticky top-5">
              <div className="space-y-8">
                {/* TOC Card */}
                <div className="bg-[#F9F9F9] rounded-2xl p-5 border border-gray-100">
                  <h3 className="text-[20px] font-medium text-[#2E2E2E] leading-7 pb-4">
                    In this article
                  </h3>
                  <ul className="space-y-2.5">
                    {tocItems.map((item, index) => (
                      <li
                        key={item.id}
                        onClick={() => handleScroll(item.id, index)}
                        className=" cursor-pointer flex  gap-3"
                      >
                        <div
                          className={` h-8 w-1 rounded-full shrink-0 transition-colors ${
                            activeIndex === index
                              ? "bg-primary"
                              : "bg-transparent "
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors flex items-center ${
                            activeIndex === index
                              ? "text-primary font-medium"
                              : "text-black hover:text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Social Share Box */}
                  <div className="mt-7 relative rounded-xl p-5 text-white overflow-hidden min-h-24.75 w-107.5 flex flex-col justify-center">
                    {/* Background Image */}
                    <Image
                      src={Images.BgImg}
                      alt="Social Background"
                      fill
                      className="rounded-[10px]"
                    />

                    <div className="absolute inset-0 bg-black/20 -z-10" />

                    <p className="text-base font-normal mb-4 relative z-10">
                      Share with our community!
                    </p>

                    <div className="flex gap-4 relative z-10">
                      <Image src={Icons.Facebook2} alt="facebook" />
                      <Image src={Icons.Twitter2} alt="Twitter" />
                      <Image src={Icons.linkedIn2} alt="LinkedIn" />
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
