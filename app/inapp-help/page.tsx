'use client'

import { useEffect } from 'react'

export default function InAppHelp() {
  useEffect(() => {
    // Load in-app help script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/inapp/current/service.js'
    script.setAttribute(
      'data-docsie-inapp',
      'deploykey:help_center_di3sLV7rJwx3RynsXGee,selfInit:true,search:true,tours:true,support:false,language:primary,version:primary'
    )
    document.body.appendChild(script)

    // Cleanup on unmount
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)

      // Cleanup Docsie widget
      if (typeof window !== 'undefined' && (window as any).Docsie?.cleanup) {
        (window as any).Docsie.cleanup()
      }
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Docsie In-App Help System</h1>
      <p className="text-gray-600 mb-8">
        Interactive help widget embedded directly in your Next.js application. Look for the help
        button to try it!
      </p>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is In-App Help?</h2>
        <p className="mb-6">
          In-app help is a contextual assistance system that lives inside your application.
          Instead of redirecting users to external documentation, help content appears right
          where they need it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded border-l-4 border-blue-600">
            <h3 className="font-semibold text-blue-900 mb-2">🔍 Contextual Search</h3>
            <p className="text-sm text-gray-700">
              Users can search your documentation without leaving your app. Results appear
              instantly in a side panel.
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded border-l-4 border-blue-600">
            <h3 className="font-semibold text-blue-900 mb-2">📚 Knowledge Base</h3>
            <p className="text-sm text-gray-700">
              Full documentation accessible via widget. Articles, guides, and FAQs in one place.
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded border-l-4 border-blue-600">
            <h3 className="font-semibold text-blue-900 mb-2">🎯 Smart Tagging</h3>
            <p className="text-sm text-gray-700">
              Tag UI elements to show relevant help content automatically based on what users are
              viewing.
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded border-l-4 border-blue-600">
            <h3 className="font-semibold text-blue-900 mb-2">🌍 Multi-Language</h3>
            <p className="text-sm text-gray-700">
              Built-in internationalization. Serve help content in your users&apos; preferred
              language.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          How It Works in Next.js
        </h2>
        <p className="mb-4">Add the script dynamically using useEffect in a Client Component:</p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
{`'use client'

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/inapp/current/service.js'
    script.setAttribute('data-docsie-inapp',
      'deploykey:help_center_ID,selfInit:true,search:true,tours:true'
    )
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (window.Docsie?.cleanup) window.Docsie.cleanup()
    }
  }, [])

  return <div>Your content</div>
}`}
        </pre>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Context-Aware Help with Tags
        </h2>
        <p className="mb-4">Tag specific elements to show relevant documentation:</p>

        <div className="flex flex-wrap gap-3">
          <span
            className="inline-block bg-blue-50 border border-blue-200 px-4 py-2 rounded cursor-help"
            data-docsie-tag="getting-started"
          >
            Getting Started
          </span>
          <span
            className="inline-block bg-blue-50 border border-blue-200 px-4 py-2 rounded cursor-help"
            data-docsie-tag="api-integration"
          >
            API Integration
          </span>
          <span
            className="inline-block bg-blue-50 border border-blue-200 px-4 py-2 rounded cursor-help"
            data-docsie-tag="authentication"
          >
            Authentication
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Use Cases</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">SaaS Applications</h3>
            <p className="text-gray-700">
              Reduce support tickets by providing instant help. Users get answers without waiting
              for email responses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Developer Tools</h3>
            <p className="text-gray-700">
              API documentation, code examples, and integration guides accessible without leaving
              your platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Customer Portals</h3>
            <p className="text-gray-700">
              Self-service support for customers. Find answers to common questions instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
