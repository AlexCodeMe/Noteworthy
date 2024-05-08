'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import React from 'react'

export default function DocumentIdPage({ params }: {
    params: { documentId: Id<'documents'> }
}) {

    const onChange = (content: string) => { }

    return (
        <div>
            Cover.Skeleton
            <div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
                <div className='space-y-4 pl-8 pt-4'>
                    <Skeleton className="h-14 w-[50%]" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[40%]" />
                    <Skeleton className="h-4 w-[60%]" />
                </div>
            </div>
        </div>
    )

    return (
        <div className='pb-40'>
            Cover
            <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
                Toolbar
                Editor
            </div>
        </div>
    )
}
