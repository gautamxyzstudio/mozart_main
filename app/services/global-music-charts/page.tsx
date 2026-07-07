import React from 'react';
import GlobalMusicChartsHero from '@/src/components/pages/global-music-charts/GlobalMusicChartsHero';
import WhatIsGlobalChart from '@/src/components/pages/global-music-charts/WhatIsGlobalChart';
 import GlobalFeatures from '@/src/components/pages/global-music-charts/GlobalFeatures';
 import WhyAreDifferent from '@/src/components/pages/global-music-charts/WhyAreDifferent';
import RegionalAndMonitoring from '@/src/components/pages/global-music-charts/RegionalAndMonitoring';
import GlobalWork from '@/src/components/pages/global-music-charts/GlobalWork';
import LaunchSongCard from '@/src/components/pages/global-music-charts/LaunchSongCard';
import Testimonials from '@/src/components/modules/testimonials/Testimonials';
 import GlobalFaqs from '@/src/components/pages/global-music-charts/GlobalFaqs';

export const metadata = {
  title: "Global Music Charts for Independent Artists | Amozart ",
  description: "Track your music on global music charts with Amozart. Real time chart tracking, worldwide rankings & data insights for independent artists in India.",
};

export default function GlobalMusicChartsPage() {
  return (
    <>
    <main className="w-full bg-black min-h-screen">
      <GlobalMusicChartsHero />
      <WhatIsGlobalChart />
    </main>
      <WhyAreDifferent/>
      <RegionalAndMonitoring />
      <GlobalFeatures />
      <GlobalWork />
      <LaunchSongCard />
      <Testimonials />
      <GlobalFaqs />
    </>
  );
}
