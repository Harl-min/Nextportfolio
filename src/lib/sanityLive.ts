import { defineLive } from "next-sanity";
import { sanityClient } from "../lib/sanity";

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient.withConfig({ apiVersion: "vX" }),
});