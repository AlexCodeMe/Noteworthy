'use client'

import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Let your inspiration move you. Ideas, Documents, Plans. Unified
        Welcome to <span className='underline'>Noteworthy</span>
      </h1>
      <h3 className='text-2xl'>
        Noteworthy is your connected workspace. <br />
        Let&apos;s make work happen.
      </h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Noteworthy
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Noteworthy free
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </SignInButton>

      )}
    </div>
  )
}
