'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { useOrigin } from '@/hooks/use-origin'
import { useMutation } from 'convex/react'
import { Check, Copy, Globe } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function Publish({ initialData }: {
    initialData: Doc<'documents'>
}) {
    const origin = useOrigin()
    const update = useMutation(api.documents.update)

    const [copied, setCopied] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const url = `${origin}}/preview/${initialData._id}`

    const onPublish = () => {
        setIsSubmitting(true)

        const promise = update({
            id: initialData._id,
            isPublished: true
        }).finally(() => setIsSubmitting(false))

        toast.promise(promise, {
            loading: 'Publishing note...',
            success: 'Note published!',
            error: 'Failed to publish note',
        })
    }

    const onUnpublish = () => {
        setIsSubmitting(true)

        const promise = update({
            id: initialData._id,
            isPublished: false
        }).finally(() => setIsSubmitting(false))

        toast.promise(promise, {
            loading: 'Unpublishing note...',
            success: 'Note unpublished!',
            error: 'Failed to unpublish note',
        })
    }

    const onCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='sm'>
            Publish
            {initialData.isPublished && (
                <Globe className='text-sky-500 w-4 h-4 ml-2' />
            )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end'
        alignOffset={8}
        forceMount
        className='w-72'>
        {initialData.isPublished ? (
            <div className='space-y-4'>
                <div className='flex items-center gap-x-2'>
                    <Globe className='text-sky-500 animate-pulse h-4 w-4' />
                    <p className='text-xs font-medium text-sky-500'>
                        This note is live on the web!
                    </p>
                </div>
                <div className='flex items-center'>
                    <Input value={url}
                        disabled
                        className='flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate' />
                    <Button onClick={onCopy}
                        disabled={copied}
                        className='h-8 rounded-l-none'>
                        {copied ? (
                            <Check className='h-4 w-4'/>
                        ) : (
                            <Copy className='h-4 w-4' />
                        )}
                    </Button>
                </div>
                <Button size='sm'
                    onClick={onUnpublish}
                    disabled={isSubmitting}
                    className='w-full text-xs'>
                    Unpublish
                </Button>
            </div>
        ) : (
            <div className='flex flex-col items-center justify-center'>
                <Globe className='h-8 w-8 text-muted-foreground mb-2' />
                <p className='text-sm font-medium mb-2'>
                    Publish this note
                </p>
                <span className='text-xs text-muted-foreground mb-4'>
                    Share your work with others.
                </span>
                <Button size='sm'
                    onClick={onPublish}
                    disabled={isSubmitting}
                    className='w-full text-xs'>
                    Publish
                </Button>
            </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
