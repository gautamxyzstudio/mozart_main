import ArtistManagementHero from '@/src/components/pages/artists/ArtistManagementHero'
import ArtistsSection from '@/src/components/pages/artists/ArtistsSection'
import WhatWeDoArtistManagement from '@/src/components/pages/artists/WhatWeDoArtistManagement'
import ManagingArtist from '@/src/components/pages/artists/ManagingArtist'
import MusicCareerCTA from '@/src/components/pages/artists/MusicCareerCTA'
import WhyArtistsTrustUs from '@/src/components/pages/artists/WhyArtistsTrustUs'
import React from 'react'
import ArtistFaq from '@/src/components/pages/artists/ArtistFaq'

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