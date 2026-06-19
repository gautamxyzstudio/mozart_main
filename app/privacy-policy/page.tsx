import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AMozart",
  description:
    "Privacy Policy for AMozart. Learn how we collect, use, protect, and manage your personal data and music catalog information.",
};

const Page = () => {
  return (
    <section className="w-full relative min-h-screen bg-white text-foreground overflow-clip">
      {/* Background slanted purple gradient shape on top-right */}
        <div className="absolute md:w-30 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-70.5 xl:mr-10 md:-mt-3 md:mr-9 mt-12.5 mr-6 right-6" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 md:px-17 xl:px-28 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-7xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground font-sans leading-none">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-base text-[#414141] font-normal">
              At AMozart, protecting your privacy is our top priority. This Privacy Policy describes how we collect, use, store, and share your personal information when you use our music distribution platform, website, and related applications.
               By registering an account and using our Services, you consent to the collection and use of your information as outlined in this policy.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">1. Information We Collect</h2>
            <p className="text-sm text-[#414141] font-normal">We collect information to provide a seamless distribution and royalty payouts experience. This includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">
                <strong>Account Details:</strong> Your name, email address, password, phone number, and mailing address.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>Artist Profiles:</strong> Stage names, biography, photographs, social media handles, and music catalog metadata.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>Payment & Tax Information:</strong> Bank details, PayPal address, and tax forms (W-8/W-9) necessary to process royalty payments.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>Technical & Usage Data:</strong> IP addresses, browser types, device identifiers, and platform usage analytics.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p className="text-sm text-[#414141] font-normal">We use the collected information for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Deliver your music and metadata to digital service providers (DSPs).</li>
              <li className="text-base text-[#414141] font-normal">Process, calculate, and distribute your earned royalties.</li>
              <li className="text-base text-[#414141] font-normal">Verify your identity and maintain security controls across accounts.</li>
              <li className="text-base text-[#414141] font-normal">Provide support, platform updates, and promotional communications.</li>
              <li className="text-base text-[#414141] font-normal">Analyze usage trends to optimize and improve platform functionality.</li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">3. Sharing Your Information</h2>
            <p className="text-sm text-[#414141] font-normal">We share your data only in the following scenarios:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">
                <strong>With DSPs:</strong> We send your music files, artwork, metadata, and artist identifiers to platforms like Spotify, Apple Music, and Amazon Music to make your releases live.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>With Service Providers:</strong> Payment processors, database servers, and analytical tools that assist us in operating our platform.
              </li>
              <li className="text-base text-[#414141] font-normal">
                <strong>For Legal Reasons:</strong> To comply with tax obligations, regulatory reports, law enforcement requests, or to protect our legal rights.
              </li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">4. Data Security</h2>
            <p className="text-base text-[#414141] font-normal">
              We implement industry-standard administrative, physical, and technical safeguards to secure your personal details and intellectual property against unauthorized access, loss, or alteration. However, please remember that no method of transmission over the internet is completely secure.
            </p>
          </div>

          {/* 5. Your Choices & Rights */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">5. Your Choices & Rights</h2>
            <p className="text-sm text-[#414141] font-normal">You have full control over your personal data at AMozart, including the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Access, correct, or update your account profile and payment credentials.</li>
              <li className="text-base text-[#414141] font-normal">Request the closure of your account and deletion of your personal records.</li>
              <li className="text-base text-[#414141] font-normal">Opt-out of marketing emails or other non-essential notifications at any time.</li>
            </ul>
          </div>

          {/* 6. Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">6. Contact Us</h2>
            <p className="text-base text-[#414141] font-normal">
              If you have any questions or feedback regarding this Privacy Policy or your personal information, please feel free to reach out to us at <a href="mailto:support@amozart.com" className="text-primary hover:underline font-bold">support@amozart.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
