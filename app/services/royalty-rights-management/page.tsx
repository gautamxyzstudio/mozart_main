import Faqs from '@/src/components/modules/faqs/Faqs'
import Testimonials from '@/src/components/modules/testimonials/Testimonials'
import ChooseRoyalty from '@/src/components/pages/Royalty-rights-Management/ChooseRoyalty'
import HowItWorkSection from '@/src/components/pages/Royalty-rights-Management/HowItWorkSection'
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
    <ChooseRoyalty />
    <HowItWorkSection />
    <Testimonials />
    <Faqs />
    </>
  )
}

export default page