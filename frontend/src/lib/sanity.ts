// ./src/lib/sanity.client.ts

import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3m4mx93m'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01' // "2023-01-01"
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN



export const client = createClient({projectId, dataset, apiVersion, token, useCdn: true})