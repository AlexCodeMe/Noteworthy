'use client'

import { api } from '@/convex/_generated/api'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { ImageIcon, X } from 'lucide-react'
import { Skeleton } from './ui/skeleton'

type Props = {
    url?: string
    preview?: boolean
}

export default function Cover({ url, preview }: Props) {
    // const { edgeStore } = useEdgeStore()
    const params = useParams()
    // const coverImage = useCoverImage()
    // const removeCoverImage = useMutation(api.documents.removeCoverImage)

    const onRemove = async () => {}

  return (
    <div className={cn(
        'relative w-full h-[35vh] group',
        !url && 'h-[12vh]',
        url && 'bg-muted',
    )}>
        {!!url && (
            <Image src={url}
                alt='Cover'
                fill
                className='object-cover' />
        )}
        {url && !preview && (
            <div className='opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2'>
                <Button variant='outline'
                    size='sm'
                    onClick={() => {}}
                    className='text-muted-foregruond text-xs'>
                    <ImageIcon className='h-4 w-4 mr-2' />
                    Change cover
                </Button>
                <Button variant='outline'
                    size='sm'
                    onClick={() => {}}
                    className='text-muted-foregruond text-xs'>
                    <X className='h-4 w-4 mr-2' />
                    Remove
                </Button>
            </div>
        )}
    </div>
  )
}

Cover.Skeleton = function CoverSkeleton() {
    return <Skeleton className='w-full h-[12vh]' />
}