import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'jblhspn1',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});