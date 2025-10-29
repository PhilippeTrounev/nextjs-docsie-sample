'use client'

import { useEffect, useState, useRef } from 'react'

export default function SecureDocs() {
  const [jwtToken, setJwtToken] = useState<string>('')
  const initialized = useRef(false)

  useEffect(() => {
    // Fetch JWT from API route
    fetch('/api/docsie-token')
      .then((res) => res.json())
      .then((data) => setJwtToken(data.token))
      .catch((err) => console.error('Failed to fetch JWT:', err))
  }, [])

  useEffect(() => {
    if (jwtToken === null || initialized.current) return
    initialized.current = true

    // Load Docsie CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://lib.docsie.io/current/styles/docsie.css'
    document.head.appendChild(link)

    // Load Docsie script with JWT
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/current/service.js'

    const config = jwtToken
      ? `docsie_pk_key:deployment_No7ZEhXLoDHoW4RH7,authorizationToken:${jwtToken}`
      : `docsie_pk_key:deployment_No7ZEhXLoDHoW4RH7,authorizationFallbackURL:https://app.docsie.io/enterprise/viewer/login/deployment_No7ZEhXLoDHoW4RH7/?redirect=${encodeURIComponent(window.location.href)}`

    script.setAttribute('data-docsie', config)
    document.body.appendChild(script)

    // Cleanup on unmount
    return () => {
      if (link.parentNode) link.parentNode.removeChild(link)
      if (script.parentNode) script.parentNode.removeChild(script)

      const container = document.querySelector('[data-ddsroot]')
      if (container) container.innerHTML = ''

      initialized.current = false
    }
  }, [jwtToken])

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div data-ddsroot style={{ width: '100%', minHeight: '100vh' }}></div>
    </div>
  )
}
