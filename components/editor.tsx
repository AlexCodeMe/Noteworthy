'use client'

import { useEdgeStore } from '@/lib/edgestore'
import { useTheme } from 'next-themes'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type Props = {
    onChange: (value: string) => void
    initialContent?: string
    editable?: boolean
}

function Editor({
    onChange, initialContent, editable
}: Props) {
    const { resolvedTheme } = useTheme()
    const { edgestore } = useEdgeStore()

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        })

        return response.url
    }

    const editor = useCreateBlockNote();

    return (
        <div>
            <BlockNoteView editor={editor}
                theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
        </div>
    )
}

export default Editor