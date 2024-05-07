import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Heading() {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Let your inspiration move you. Ideas, Documents, Plans. Unified
        Welcome to <span className='underline'>Noteworthy</span>
      </h1>
      <h3 className='text-2xl'>
        Noteworthy is your connected workspace. <br/>
        Let's make work happen.
      </h3>
      <Button>
        Become Noteworthy (free)
        <ArrowRight className='ml-2 h-4 w-4' />
      </Button>
    </div>
  )
}
