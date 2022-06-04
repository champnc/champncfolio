import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: process.env.REACT_PROJECT_ID,
  dataset: "production",
  apiVersion: "1.0.0",
  useCdn: true,
  token: process.env.REACT_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
