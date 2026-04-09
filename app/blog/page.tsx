import BlogListVeiw from "@/src/components/pages/blog/BlogListVeiw";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Information Blog & Artist tips Insights | Amozart",
  description:
    "Explore the Amozart blog for music tips, industry insights, tutorials, and creative ideas for artists, producers, and independent musicians looking to grow and succeed. ",
};

const page = () => {
  return <BlogListVeiw />;
};

export default page;
