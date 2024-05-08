'use client'

import React, { useEffect, useState } from 'react'
import SettingsModal from '../modals/settings-modal'
import CoverImageModal from '../modals/cover-image-modal'

export default function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

  return !isMounted ? null : (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}
