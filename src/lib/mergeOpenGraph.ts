import type { Metadata } from 'next'
import { baseConfig } from './config'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: baseConfig.siteName,
  title: baseConfig.siteName,
  description: baseConfig.description,
  images: [
    {
      url: baseConfig.baseUrl,
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
