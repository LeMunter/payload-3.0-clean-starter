import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'max-w-screen-2xl mx-auto md:px-20 w-full px-2.5',
        className
      )}
    >
      {children}
    </div>
  )
}
