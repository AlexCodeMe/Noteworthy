import { Doc, Id } from '@/convex/_generated/dataModel'
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Item from './item'
import { FileIcon } from 'lucide-react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

type Props = {
    parentDocumentId?: Id<'documents'>
    level?: number
    data?: Doc<'documents'>[]
}

export default function DocumentList({
    parentDocumentId,
    level = 0,
}: Props) {
    const params = useParams()
    const router = useRouter()

    const documents = useQuery(api.documents.getSidebar, {
        parentDocument: parentDocumentId
    })

    const [expanded, setExpanded] = useState<Record<string, boolean>>({})

    const onExpand = (documentId: string) => {
        setExpanded((prev) => ({
            ...prev,
            [documentId]: !prev[documentId]
        }))
    }


    const onRedirect = (documentId: String) => {
        router.push(`/documents/${documentId}`)
    }

  return documents !== undefined ? (
    <>
        <p style={{
                paddingLeft: level ? `${(level * 12) + 25}px` : undefined
            }}
            className={cn(
                'hidden text-sm font-medium text-muted-foreground/80',
                expanded && 'last:block',
                level === 0 && 'hidden'
            )}>
            No pages inside
        </p>
        {documents.map((doc) => (
            <div key={doc._id}>
                <Item id={doc._id}
                    label={doc.title}
                    icon={FileIcon}
                    documentIcon={doc.icon}
                    level={level}
                    active={params.documentId === doc._id}
                    onClick={() => onRedirect(doc._id)}
                    onExpand={() => onExpand(doc._id)}
                    expanded={expanded[doc._id]} />
                {expanded[doc._id] && (
                    <DocumentList level={level + 1}
                        parentDocumentId={doc._id} />
                )}
            </div>
        ))}
    </>
  ) : (
    <div>ItemSkeleton</div>
  )
}