'use client'

import { cn } from '@/lib/utils'
import type { Media } from '@/payload-types'
import NextImage, { type StaticImageData } from 'next/image'
import { useState } from 'react'

type ImageProps = {
  resource: number | Media
  fill?: boolean
  className?: string
} & Pick<
  React.ComponentProps<typeof NextImage>,
  'layout' | 'objectFit' | 'objectPosition' | 'priority'
>

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const Image = ({ resource, fill, className, ...rest }: ImageProps) => {
  if (typeof resource === 'number' || !resource.url) return null

  const {
    alt: altFromProps,
    sizes: sizesFromProps,
    width: widthFromProps,
    height: heightFromProps,
    url,
  } = resource

  let width: number | undefined = widthFromProps || undefined
  let height: number | undefined = heightFromProps || undefined
  let alt: string | undefined = altFromProps || ''
  let src: StaticImageData | string = url || ''

  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  return (
    <NextImage
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      sizes={sizes}
      className={cn(className)}
      {...rest}
    />
  )
}
