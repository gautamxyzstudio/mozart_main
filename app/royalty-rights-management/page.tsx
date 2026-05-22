import RoyaltyHeroSection from '@/src/components/pages/Royalty-rights-Management/RoyaltyHeroSection'
import RoyaltyService from '@/src/components/pages/Royalty-rights-Management/RoyaltyService'
import WhyAreDifferentRoyalty from '@/src/components/pages/Royalty-rights-Management/WhyAreDifferentRoyalty'
import WhyChooseRoyalty from '@/src/components/pages/Royalty-rights-Management/WhyChooseRoyalty'
import React from 'react'

const page = () => {
  return (
    <>
    <RoyaltyHeroSection />
    <WhyChooseRoyalty />
    <RoyaltyService/>
    <WhyAreDifferentRoyalty />
    </>
  )
}

export default page