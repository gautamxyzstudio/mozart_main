import axios from "axios";
import { EndPoint } from "../endpoints";

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
interface ImageFormats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

interface ImageData extends ImageAttributes {
  id: number;
}

type BannerData = ImageData;

interface BlogResponse {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  title: string;
  meta_description: string;
  meta_title: string;
  date: string | null;
  cover_image: BannerData;
  slug: string;
  thumbnail: BannerData;
  category: string[];
}

export interface TransformedBlog {
  id: number;
  title: string;
  blogData: string;
  metaTitle: string;
  metaDescr: string;
  createdAt: string;
  smallBanner: string | null;
  updatedAt: string;
  publishedAt: string;
  blogDate: string | null;
  banner: string;
  blogSlug: string;
  category: string[];
  imageId?: number;
}

export const getBlog = async (
  page: number,
  limit: number,
  search: string = "",
  category: string = "",
): Promise<{
  data: TransformedBlog[];
  total: number;
  page: number;
  limit: number;
}> => {
  const response = await axios.get(
    EndPoint.BLOG(page, limit, search, category),
  );
  const blogs = response.data.data.map((blog: BlogResponse) => ({
    id: blog.id,
    title: blog.title,
    blogData: blog.content,
    metaTitle: blog.meta_title,
    metaDescr: blog.meta_description,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
    blogDate: blog.date,
    blogSlug: blog.slug,
    category: blog.category,
    imageId: blog?.cover_image?.id,
    smallBanner:
      blog?.cover_image?.formats?.small?.url,
    banner: blog?.cover_image?.url
      ? blog.cover_image.url
      : "",
  }));
  return {
    data: blogs,
    total: response.data.meta.pagination.total,
    page: response.data.meta.pagination.page,
    limit: response.data.meta.pagination.pageSize,
  };
};

export const getBlogDetailsBySlug = async (
  slug: string,
): Promise<TransformedBlog> => {
  const response = await axios.get(EndPoint.BLOG_BY_SLUG(slug));
  const blog = response.data.data;
  console.log(response.data.data);
  return {
    id: blog.id,
    title: blog.title,
    blogData: blog.content,
    metaTitle: blog.meta_title,
    metaDescr: blog.meta_description,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
    blogDate: blog.date,
    blogSlug: blog.slug,
    category: blog.category,
    imageId: blog?.cover_image?.id,
    smallBanner:
      blog?.cover_image?.formats?.small?.url,
    banner: blog?.cover_image?.url
      ? blog.cover_image.url
      : "",
  };
};
