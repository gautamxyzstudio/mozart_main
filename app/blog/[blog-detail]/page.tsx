import BlogDetailPage from "@/src/components/pages/blog/BlogDetailPage";
import "./blogDetails.css";
import { getBlogDetailsBySlug } from "@/src/api/blog/blogApi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "blog-detail": string }>;
}) {
  const { "blog-detail": slug } = await params;
  const blogData = await getBlogDetailsBySlug(slug);

  return {
    title: blogData?.metaTitle || blogData?.title || "Blog",
    description: blogData?.metaDescr || "",
  };
}

const page = async ({
  params,
}: {
  params: Promise<{ "blog-detail": string }>;
}) => {
  const { "blog-detail": slug } = await params;
  return <BlogDetailPage slug={slug} />;
};

export default page;
