import { env } from '@/env'

export const baseConfig = {
  siteName: 'Payload 3.0 - Next.js Starter',
  description:
    'Clean payload 3.0 starter with Next.js, Tailwind CSS, TypeScript, shadcn, Postgres and bun as package manager.',
  baseUrl: env.NEXT_PUBLIC_SERVER_URL,
}
