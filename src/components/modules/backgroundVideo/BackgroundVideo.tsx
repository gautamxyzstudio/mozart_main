"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="none"
    >
      <source src="/videos/player.mp4" type="video/mp4" />
    </video>
  );
}
