import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      image: z.object({
        url: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        alt: z.string(),
      }),
    }),
});

export const collections = {
  posts: blogCollection,
};
