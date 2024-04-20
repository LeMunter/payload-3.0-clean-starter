'use client'

import { GooLoader } from './goo-loader'
import { AlertDialog, AlertDialogContent } from './alert-dialog'
import { Icons } from '../icons'
import { Vortex } from './vortex'

export const DialogLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AlertDialog open={isLoading}>
      <AlertDialogContent className='bg-transparent border-none bg-opacity-0 shadow-none grid place-items-center'>
        <Icons.logo className='size-52 fill-primary animate-spin animate-infinite animate-duration-[2000ms] animate-ease-in-out' />
      </AlertDialogContent>
    </AlertDialog>
  )
}
