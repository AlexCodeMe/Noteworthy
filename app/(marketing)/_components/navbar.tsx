'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import Spinner from '@/components/spinner'
import { SignInButton, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
  const scrolled = useScrollTop()
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className={cn(
      'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
      scrolled && 'border-b shadow-xl'
    )}>
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost'
                size='sm'>
                login
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>
                Noteworthy (free)
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost'
              size='sm'
              asChild>
              <Link href='/documents'>
                Enter Noteworthy
              </Link>
            </Button>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
