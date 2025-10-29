'use client'

import { useEffect, useRef } from 'react'

export default function PublicDocs() {
  const initialized = useRef(false)

  useEffect(() => {
    // Prevent double-initialization in React Strict Mode
    if (initialized.current) return
    initialized.current = true

    console.log('🔄 Initializing Docsie...')

    // Load Docsie CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://lib.docsie.io/current/styles/docsie.css'
    document.head.appendChild(link)

    // Load Docsie script - MUST use createElement to set data-docsie attribute
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/current/service.js'
    script.setAttribute('data-docsie', 'docsie_pk_key:deployment_EFk3AIigMh599HRk6')

    script.onload = () => {
      console.log('✅ Docsie script loaded successfully')
      console.log('📍 data-docsie attribute:', script.getAttribute('data-docsie'))
    }
    script.onerror = () => console.error('❌ Docsie script failed to load')

    document.body.appendChild(script)

    // Cleanup on unmount
    return () => {
      console.log('🧹 Cleaning up Docsie')
      if (link.parentNode) link.parentNode.removeChild(link)
      if (script.parentNode) script.parentNode.removeChild(script)

      const container = document.querySelector('[data-ddsroot]')
      if (container) container.innerHTML = ''

      initialized.current = false
    }
  }, [])

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div data-ddsroot style={{ width: '100%', minHeight: '100vh' }}></div>
    </div>
  )
}
