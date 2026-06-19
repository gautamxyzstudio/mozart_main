import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AMozart",
  description:
    "Terms of Service for AMozart - global music distribution and rights management platform. Understand your rights, royalties, and content distribution details.",
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
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-base text-[#414141] font-normal">
              Welcome to Amozart. By accessing or using our music distribution platform, website, applications, and related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use our Services.
               These Terms are commonly used by digital music distribution platforms and are designed to define user rights, content ownership, distribution permissions, royalties, and platform responsibilities.
            </p>
            
          </div>

          {/* 1. Eligibility */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">1. Eligibility</h2>
            <p className="text-sm text-[#414141] font-normal">
              You must be at least 18 years old or have legal parental/guardian consent to use Amozart.
            </p>
            <p className="text-sm text-[#414141] font-normal">By creating an account, you represent that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">The information you provide is accurate and current.</li>
              <li className="text-base text-[#414141] font-normal">You have the authority to enter into this agreement.</li>
              <li className="text-base text-[#414141] font-normal">You will comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          {/* 2. Account Registration */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">2. Account Registration</h2>
            <p className="text-sm text-[#414141] font-normal">You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Maintaining the confidentiality of your account credentials.</li>
              <li className="text-base text-[#414141] font-normal">All activities occurring under your account.</li>
              <li className="text-base text-[#414141] font-normal">Keeping your contact and payment information updated.</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">
              Amozart reserves the right to suspend or terminate accounts that violate these Terms.
            </p>
          </div>

          {/* 3. Ownership of Content */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">3. Ownership of Content</h2>
            <p className="text-sm text-[#414141] font-normal">
              You retain full ownership of your music, recordings, artwork, metadata, videos, and related intellectual property (&quot;Content&quot;).
            </p>
            <p className="text-sm text-[#414141] font-normal">Amozart does not claim ownership of your Content.</p>
            <p className="text-sm text-[#414141] font-normal">You represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">You own or control all necessary rights.</li>
              <li className="text-base text-[#414141] font-normal">Your Content does not infringe third-party rights.</li>
              <li className="text-base text-[#414141] font-normal">You have obtained all required licenses, permissions, and clearances.</li>
            </ul>
            <p className="text-sm text-[#414141]/60 font-normal pt-2">
              Artists generally retain ownership while granting distributors limited rights necessary for distribution and monetization.
            </p>
          </div>

          {/* 4. Distribution License */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">4. Distribution License</h2>
            <p className="text-sm text-[#414141] font-normal">
              By uploading Content, you grant Amozart a worldwide, non-exclusive, royalty-bearing license to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Distribute your Content to digital service providers (DSPs).</li>
              <li className="text-base text-[#414141] font-normal">Deliver Content to streaming and download platforms.</li>
              <li className="text-base text-[#414141] font-normal">Use artwork, metadata, artist names, and promotional materials.</li>
              <li className="text-base text-[#414141] font-normal">Create preview clips and promotional snippets.</li>
              <li className="text-base text-[#414141] font-normal">Process, encode, and format Content for distribution purposes.</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">
              This license remains active until you request takedown or terminate distribution.
            </p>
            <p className="text-sm text-[#414141]/60 font-normal">
              Music distributors typically require a distribution license to deliver content and associated metadata to DSPs.
            </p>
          </div>

          {/* 5. Distribution Services */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">5. Distribution Services</h2>
            <p className="text-sm text-[#414141] font-normal">Amozart may distribute Content to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Spotify</li>
              <li className="text-base text-[#414141] font-normal">Apple Music</li>
              <li className="text-base text-[#414141] font-normal">YouTube Music</li>
              <li className="text-base text-[#414141] font-normal">Amazon Music</li>
              <li className="text-base text-[#414141] font-normal">TikTok</li>
              <li className="text-base text-[#414141] font-normal">Instagram</li>
              <li className="text-base text-[#414141] font-normal">Deezer</li>
              <li className="text-base text-[#414141] font-normal">Tidal</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">Other current or future digital platforms.</p>
            <p className="text-sm text-[#414141]/60 font-normal">
              Distribution availability may vary by territory, platform, and content eligibility.
            </p>
          </div>

          {/* 6. Royalties and Payments */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">6. Royalties and Payments</h2>
            <p className="text-sm text-[#414141] font-normal">Subject to applicable fees:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">You will receive royalties earned from distributed Content.</li>
              <li className="text-base text-[#414141] font-normal">Royalties are paid after Amozart receives funds from DSPs.</li>
              <li className="text-base text-[#414141] font-normal">Payment schedules may vary depending on DSP reporting.</li>
              <li className="text-base text-[#414141] font-normal">Minimum payout thresholds may apply.</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">
              Amozart is not responsible for delays caused by DSPs, payment processors, or banking institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
