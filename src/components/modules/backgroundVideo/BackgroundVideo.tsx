"use client";
import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [desktopRef.current, mobileRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    videos.forEach((v) => observer.observe(v!));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop */}
      <video
        ref={desktopRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/player.webm" type="video/webm" />
        <source src="/videos/player.mp4" type="video/mp4" />
      </video>

      {/* Mobile */}
      <video
        ref={mobileRef}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/pro.mp4" type="video/mp4" />
      </video>
    </>
  );
}
