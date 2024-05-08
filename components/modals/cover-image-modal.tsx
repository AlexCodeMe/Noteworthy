'use client'

import { api } from '@/convex/_generated/api'
import { useCoverImage } from '@/hooks/use-cover-image'
import { useMutation } from 'convex/react'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'

export default function CoverImageModal() {
    const params = useParams()
    const update = useMutation(api.documents.update)
    const coverImage = useCoverImage()
    // const { edgestore } = useEdgeStore()

    const [file, setFile] = useState<File>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onClose = () => {}

    const onChange = async (file?: File) => {}


  return (
    <Dialog open={coverImage.isOpen}
        onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
            <h2 className='text-center text-lg font-semibold'>
                Cover Image
            </h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
