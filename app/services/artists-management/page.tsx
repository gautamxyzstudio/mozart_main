import ArtistManagementHero from '@/src/components/pages/artists/ArtistManagementHero'
import ArtistsSection from '@/src/components/pages/artists/ArtistsSection'
import WhatWeDoArtistManagement from '@/src/components/pages/artists/WhatWeDoArtistManagement'
import ManagingArtist from '@/src/components/pages/artists/ManagingArtist'
import MusicCareerCTA from '@/src/components/pages/artists/MusicCareerCTA'
import WhyArtistsTrustUs from '@/src/components/pages/artists/WhyArtistsTrustUs'
import React from 'react'
import ArtistFaq from '@/src/components/pages/artists/ArtistFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Artist Management for Independent Musicians | Amozart",
  description:
    " Amozart provides artist management for independent musicians & Punjabi artists. Career strategy, branding, distribution & royalties -all in one place. ",
};

const page = () => {
  return (
    <main>
      <ArtistManagementHero />
      <WhatWeDoArtistManagement />
      <ManagingArtist />
      <MusicCareerCTA />
      <WhyArtistsTrustUs />
      <ArtistFaq />
      {/* <ArtistsSection /> */}
    </main>
  )
}

export default page