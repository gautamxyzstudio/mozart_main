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

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface BannerData {
  data: ImageData;
}

interface BlogAttributes {
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

interface BlogResponse {
  id: number;
  attributes: BlogAttributes;
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
    title: blog.attributes.title,
    blogData: blog.attributes.content,
    metaTitle: blog.attributes.meta_title,
    metaDescr: blog.attributes.meta_description,
    createdAt: blog.attributes.createdAt,
    updatedAt: blog.attributes.updatedAt,
    publishedAt: blog.attributes.publishedAt,
    blogDate: blog.attributes.date,
    blogSlug: blog.attributes.slug,
    category: blog.attributes.category,
    imageId: blog?.attributes.cover_image?.data?.id,
    smallBanner:
      blog?.attributes.cover_image?.data?.attributes?.formats?.small?.url,
    banner: blog?.attributes.cover_image?.data?.attributes?.url
      ? blog.attributes.cover_image.data.attributes.url
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
  return {
    id: blog.id,
    title: blog.attributes.title,
    blogData: blog.attributes.content,
    metaTitle: blog.attributes.meta_title,
    metaDescr: blog.attributes.meta_description,
    createdAt: blog.attributes.createdAt,
    updatedAt: blog.attributes.updatedAt,
    publishedAt: blog.attributes.publishedAt,
    blogDate: blog.attributes.date,
    blogSlug: blog.attributes.slug,
    category: blog.attributes.category,
    imageId: blog?.attributes.cover_image?.data?.id,
    smallBanner:
      blog?.attributes.cover_image?.data?.attributes?.formats?.small?.url,
    banner: blog?.attributes.cover_image?.data?.attributes?.url
      ? blog.attributes.cover_image.data.attributes.url
      : "",
  };
};
