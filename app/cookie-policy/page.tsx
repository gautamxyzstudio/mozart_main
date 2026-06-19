import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | AMozart",
  description:
    "Cookie Policy for AMozart. Learn about the cookies we use on our music distribution platform, their purpose, and how to manage your cookie preferences.",
};

const Page = () => {
  return (
    <section className="w-full relative min-h-screen bg-white text-foreground overflow-clip">
      {/* Background slanted purple gradient shape on top-right */}
        <div className="absolute md:w-30 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-70.5 xl:mr-10 md:-mt-3 md:mr-9 mt-12.5 mr-6 right-6" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-13 xl:px-28 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[52px] md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground font-sans leading-none">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-base text-[#414141] font-normal">
              This Cookie Policy explains how AMozart uses cookies and similar tracking technologies on our website and digital distribution platform.
               By continuing to browse our website or use our Services, you consent to our use of cookies in accordance with the terms of this policy.
            </p>
          </div>

          {/* 1. What Are Cookies? */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">1. What Are Cookies?</h2>
            <p className="text-base text-[#414141] font-normal">
              Cookies are small text files containing a string of characters that are stored on your computer or mobile device when you visit a website. They help us recognize your device, retrieve settings, and customize your user experience.
            </p>
          </div>

          {/* 2. How We Use Cookies */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">2. How We Use Cookies</h2>
            <p className="text-sm text-[#414141] font-normal">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">
                <strong>Essential Cookies:</strong> Critical cookies required for you to log in, access secure areas of your account, and manage releases. Without these, the platform cannot function correctly.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>Preference Cookies:</strong> Used to remember your dashboard preferences, theme settings, language options, and regional choices.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>Analytics & Performance:</strong> Help us measure platform performance, track user engagement, identify errors, and understand which sections are visited most frequently (e.g., using Google Analytics).
              </li>
            </ul>
          </div>

          {/* 3. Third-Party Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">3. Third-Party Cookies</h2>
            <p className="text-base text-[#414141] font-normal">
              In addition to our first-party cookies, some third-party integrations (such as payment processing providers like Stripe or PayPal, and support chat widgets) may place cookies on your browser to facilitate transaction security and direct assistance.
            </p>
          </div>

          {/* 4. Managing Cookie Settings */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">4. Managing Cookie Settings</h2>
            <p className="text-sm text-[#414141] font-normal">
              You can control and manage cookies through your web browser settings. Most browsers allow you to block all cookies, accept only certain cookies, or alert you when a cookie is stored.
            </p>
            <p className="text-sm text-[#414141]/60 font-normal pt-2">
              Note: Blocking essential cookies may prevent you from logging in or using the AMozart distribution dashboard.
            </p>
          </div>

          {/* 5. Policy Updates */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">5. Policy Updates</h2>
            <p className="text-base text-[#414141] font-normal">
              We may update this Cookie Policy from time to time to reflect changes in technologies, regulations, or our operations. Any changes will be posted on this page with an updated date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
