import React from 'react';
import GlobalMusicChartsHero from '@/src/components/pages/global-music-charts/GlobalMusicChartsHero';
import WhatIsGlobalChart from '@/src/components/pages/global-music-charts/WhatIsGlobalChart';
 import GlobalFeatures from '@/src/components/pages/global-music-charts/GlobalFeatures';
 import WhyAreDifferent from '@/src/components/pages/global-music-charts/WhyAreDifferent';
import GlobalWork from '@/src/components/pages/global-music-charts/GlobalWork';
import LaunchSongCard from '@/src/components/pages/global-music-charts/LaunchSongCard';
import Testimonials from '@/src/components/modules/testimonials/Testimonials';
import Faqs from '@/src/components/modules/faqs/Faqs';

export const metadata = {
  title: "Global Music Charts | AMozart",
  description: "Submit your music to global charts and track your performance worldwide with powerful chart insights",
};

export default function GlobalMusicChartsPage() {
  return (
    <>
    <main className="w-full bg-black min-h-screen">
      <GlobalMusicChartsHero />
      <WhatIsGlobalChart />
    </main>
      <WhyAreDifferent/>
      <GlobalFeatures />
      <GlobalWork />
      <LaunchSongCard />
      <Testimonials />
      <Faqs />
    </>
  );
}
