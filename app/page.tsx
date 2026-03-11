import HomeAboutSection from "@/src/components/pages/home/HomeAboutSection";
import HomeNewRelease from "@/src/components/pages/home/HomeNewRelease";
import HomeTopSection from "@/src/components/pages/home/HomeTopSection";

export default function Home() {
  return (
    <>
      <HomeTopSection />
      <HomeAboutSection />
      <HomeNewRelease />
    </>
  );
}
