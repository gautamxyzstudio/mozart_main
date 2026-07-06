import React from "react";
import { Metadata } from "next";
import YouTubeContentIdHero from "@/src/components/pages/youtube-content-id/YouTubeContentIdHero";
import WhatIsYouTubeContentId from "@/src/components/pages/youtube-content-id/WhatIsYouTubeContentId";
import HowItWorks from "@/src/components/pages/youtube-content-id/HowItWorks";
import WhatYouGet from "@/src/components/pages/youtube-content-id/WhatYouGet";
import WhoIsEligible from "@/src/components/pages/youtube-content-id/WhoIsEligible";
import FAQ from "@/src/components/pages/youtube-content-id/FAQ";

export const metadata: Metadata = {
  title: "YouTube Content ID for Independent Artists | Amozart",
  description:
    "Register your music with YouTube Content ID and turn every reupload, cover, and use of your song into a revenue stream - automatically.",
};

const page = () => {
  return (
    <>
      <YouTubeContentIdHero />
      <HowItWorks />
      <WhatIsYouTubeContentId />
      <WhatYouGet />
      <WhoIsEligible />
      <FAQ />
    </>
  );
};

export default page;
