'use client'

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { PlusCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function DocumentsPage() {
    const router = useRouter()
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: 'Untitled' })
            // .then((docId) => router.push(`/documents/${docId}`))

        toast.promise(promise, {
            loading: 'Creating a new note...',
            success: 'New Note Created!',
            error: 'Failed to create note'
        })
    }
    
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image src='/empty.png'
        alt='empty'
        height={300}
        width={300}
        className='dark:hidden' />
      <Image src='/empty-dark.png'
        alt='empty'
        height={300}
        width={300}
        className='dark:block hidden' />
      <h2>
        Welcome to {user?.firstName}&apos;s Noteworthy
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a note
      </Button>
    </div>
  )
}
