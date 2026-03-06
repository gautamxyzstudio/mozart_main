import React from "react";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-full">
      <NewsLetter />
      <div className="w-full pt-13 pb-2 px-6 md:px-13 md:pb-4 xl:pt-21.5 xl:px-25 xl:pb-0 bg-foreground"></div>
    </footer>
  );
};

export default Footer;
