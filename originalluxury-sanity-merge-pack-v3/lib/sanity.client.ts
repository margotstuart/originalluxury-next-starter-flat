import { createClient } from '@sanity/client'

export const apiVersion = process.env.SANITY_API_VERSION || '2023-10-10'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const token = process.env.SANITY_READ_TOKEN
const useCdn = !token

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  perspective: 'published',
})
