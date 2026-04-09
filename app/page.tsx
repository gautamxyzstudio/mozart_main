import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import HomeAboutSection from "@/src/components/pages/home/HomeAboutSection";
import HomeLabelSection from "@/src/components/pages/home/HomeLabelSection";
import HomeNewRelease from "@/src/components/pages/home/HomeNewRelease";
import HomePromotion from "@/src/components/pages/home/HomePromotion";
import HomeServiceSection from "@/src/components/pages/home/HomeServiceSection";
import HomeTopSection from "@/src/components/pages/home/HomeTopSection";


export default function Home() {
  return (
    <>
      <HomeTopSection />
      <HomeAboutSection />
      <HomeNewRelease />
      <HomeServiceSection />
      <HomeLabelSection />
      <HomePromotion />
      <Faqs />
      <Testimonials />
    </>
  );
}
