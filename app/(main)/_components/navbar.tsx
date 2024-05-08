'use client'

import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { MenuIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {
    isCollapsed: boolean
    onResetWidth: () => void
}

export default function Navbar({ isCollapsed, onResetWidth }: Props) {
    const params = useParams()

  return false ? (
    <div>Navbar</div>
  ) : (
    <>
        <nav className='bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4'>
            {isCollapsed && (
                <MenuIcon role='button'
                    onClick={onResetWidth}
                    className='h-6 w-6 text-muted-foreground' />
            )}
            <div className='flex items-center justify-between w-full'>
                Title
                <div className='flex items-center gap-x-2'>
                    Publish
                    Menu
                </div>
            </div>
        </nav>
        {/* {document.isArchived && (
            <Banner documentId={document._id} />
        )} */}
    </>
  )
}