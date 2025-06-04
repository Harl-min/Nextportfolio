import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'jblhspn1',
  dataset: 'production',
  apiVersion: "2024-11-01",
  useCdn: false,
});