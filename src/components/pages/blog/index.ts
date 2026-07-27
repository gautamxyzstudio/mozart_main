/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ExtractedFaqItem {
  id: string;
  question: string;
  answer: string;
  title: string;
  desc: string;
}

export const extractFaqsFromBlog = (html: string): ExtractedFaqItem[] => {
  if (!html) return [];

  const decodeHtml = (value: string) => {
    return value
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/\u00a0/g, " ");
  };

  const decodedHtml = decodeHtml(html);

  const jsonLdRegex =
    /(?:<p[^>]*>\s*)?(?:&lt;script|<script)[^>]*type=["']application\/ld\+json["'][^>]*(?:&gt;|>)([\s\S]*?)(?:&lt;\/script&gt;|<\/script>)(?:\s*<\/p>)?/gi;

  const matches = [
    ...html.matchAll(jsonLdRegex),
    ...decodedHtml.matchAll(jsonLdRegex),
  ];

  for (const match of matches) {
    if (!match?.[1]) continue;
    try {
      const cleanedJson = match[1]
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replace(/&nbsp;/gi, " ")
        .replace(/\u00a0/g, " ")
        .replace(/“|”/g, '"')
        .replace(/‘|’/g, "'")
        .replace(/,\s*]/g, "]")
        .replace(/,\s*}/g, "}")
        .trim();

      const parsed = JSON.parse(cleanedJson);
      const items = Array.isArray(parsed["@graph"])
        ? parsed["@graph"]
        : Array.isArray(parsed)
        ? parsed
        : [parsed];

      const faqObj = items.find((item: any) => item["@type"] === "FAQPage");

      if (faqObj && Array.isArray(faqObj.mainEntity)) {
        return faqObj.mainEntity.map((item: any, index: number) => ({
          id: `panel${index + 1}`,
          question: item.name || item.question || "",
          answer: item.acceptedAnswer?.text || item.answer || "",
          title: item.name || item.question || "",
          desc: item.acceptedAnswer?.text || item.answer || "",
        }));
      }
    } catch (error) {
      console.error("FAQ parse error", error);
    }
  }

  return [];
};

