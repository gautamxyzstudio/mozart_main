import HomeAboutSection from "@/src/components/pages/home/HomeAboutSection";
import HomeLabelSection from "@/src/components/pages/home/HomeLabelSection";
import HomeNewRelease from "@/src/components/pages/home/HomeNewRelease";
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
    </>
  );
}
