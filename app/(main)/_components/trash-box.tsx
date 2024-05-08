'use client'

import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

export default function TrashBox() {
    const router = useRouter()
    const params = useParams()
    // const documents = useQuery(api.documents.getTrash)
  return (
    <div>
      trash_box_comp
    </div>
  )
}
