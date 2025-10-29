# Docsie Next.js Integration Example

Complete Next.js 15 example demonstrating how to embed Docsie documentation platform into your Next.js applications using the **App Router**. This example shows three integration patterns: **public documentation**, **JWT-secured documentation with server-side auth**, and **in-app help widgets**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to see the examples.

## 📚 What's Included

### 1. Public Documentation (`/public-docs`)
Embed publicly accessible documentation using a Client Component. Perfect for:
- Product documentation
- API references
- User guides
- Knowledge bases

**Implementation (Client Component):**
```tsx
'use client'

import { useEffect } from 'react'

export default function PublicDocs() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://lib.docsie.io/current/styles/docsie.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/current/service.js'
    script.setAttribute('data-docsie', 'docsie_pk_key:YOUR_DEPLOYMENT_KEY')
    document.body.appendChild(script)

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link)
      if (script.parentNode) script.parentNode.removeChild(script)
      const container = document.querySelector('[data-ddsroot]')
      if (container) container.innerHTML = ''
    }
  }, [])

  return <div data-ddsroot></div>
}
```

### 2. Secured Documentation with JWT (`/secure-docs`)
Authenticate users with JWT tokens generated server-side via API Routes. Ideal for:
- Internal documentation
- Enterprise knowledge bases
- Customer-specific documentation
- Premium content

**Backend (API Route - Server Component):**
```typescript
// app/api/docsie-token/route.ts
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET() {
  const masterKey = process.env.DOCSIE_MASTER_KEY

  const token = jwt.sign(
    {}, // payload
    masterKey,
    { algorithm: 'HS256', expiresIn: '1h' }
  )

  return NextResponse.json({ token })
}
```

**Frontend (Client Component):**
```tsx
'use client'

import { useEffect, useState } from 'react'

export default function SecureDocs() {
  const [token, setToken] = useState('')

  useEffect(() => {
    fetch('/api/docsie-token')
      .then(res => res.json())
      .then(data => setToken(data.token))
  }, [])

  useEffect(() => {
    if (!token) return

    const script = document.createElement('script')
    script.src = 'https://lib.docsie.io/current/service.js'
    script.setAttribute('data-docsie',
      `docsie_pk_key:YOUR_DEPLOYMENT_KEY,authorizationToken:${token}`
    )
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [token])

  return <div data-ddsroot></div>
}
```

### 3. In-App Help Widget (`/inapp-help`)
Contextual help system that lives inside your application. Features include:
- **Contextual search** - Search documentation without leaving your app
- **Knowledge base** - Full documentation in a side panel
- **Smart tagging** - Show relevant help based on user context
- **Tours & guides** - Interactive product tours
- **Multi-language** - Internationalization support

**Implementation:**
```tsx
'use client'

import { useEffect } from 'react'

export default function InAppHelp() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://lib.docsie.io/inapp/current/service.js'
    script.setAttribute('data-docsie-inapp',
      'deploykey:YOUR_HELP_CENTER_ID,selfInit:true,search:true,tours:true'
    )
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (window.Docsie?.cleanup) window.Docsie.cleanup()
    }
  }, [])

  return <div>Your content</div>
}
```

## 🔧 Configuration Options

### Public/Secured Documentation

```javascript
// Minimal configuration
'docsie_pk_key:deployment_YOUR_KEY'

// With JWT authentication
'docsie_pk_key:deployment_YOUR_KEY,authorizationToken:YOUR_JWT_TOKEN'

// With fallback login URL
'docsie_pk_key:deployment_YOUR_KEY,authorizationFallbackURL:https://your-login-page.com'
```

### In-App Help Widget

```javascript
'deploykey:YOUR_HELP_CENTER_ID,selfInit:true,search:true,tours:true,support:false,language:primary,version:primary'
```

**Options:**
- `selfInit` - Auto-initialize widget (true/false)
- `search` - Enable search functionality (true/false)
- `tours` - Enable guided tours (true/false)
- `support` - Enable support chat (requires JWT auth)
- `language` - Language code or "primary"
- `version` - Version selector or "primary"

## 🎯 Use Cases

### SaaS Applications
Embed documentation directly in your SaaS product. Reduce support tickets by 40%+ with instant, contextual help. Users get answers without leaving your application or waiting for email support.

### Developer Platforms
Provide API documentation, SDK references, and integration guides right in your developer console. Code examples and tutorials accessible without context switching.

### Enterprise Portals
Secure, JWT-authenticated documentation for internal teams or enterprise customers. Role-based access control with your existing authentication system.

### E-Learning Platforms
Interactive course materials, tutorials, and knowledge bases. Version control for curriculum updates and multi-language support for global audiences.

### Customer Support Portals
Self-service knowledge base that reduces support ticket volume. Contextual help reduces time-to-resolution and improves customer satisfaction scores.

## 📦 Project Structure

```
app/
├── api/
│   └── docsie-token/
│       └── route.ts          # Server-side JWT generation
├── public-docs/
│   └── page.tsx              # Public documentation page
├── secure-docs/
│   └── page.tsx              # Secured documentation page
├── inapp-help/
│   └── page.tsx              # In-app help widget page
├── layout.tsx                # Root layout with navigation
├── page.tsx                  # Home page
└── globals.css               # Global styles
```

## 🆕 Next.js App Router Features

This example uses Next.js 15 with the App Router, demonstrating:
- **Server Components** - API Routes for server-side JWT generation
- **Client Components** - Interactive Docsie widget integration
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Metadata API** - SEO optimization

## 🔗 Related Examples

- [React Integration Example](https://github.com/PhilippeTrounev/react-docsie-sample)
- [Vue.js Integration Example](https://github.com/PhilippeTrounev/vue-docsie-sample)
- [Blazor WASM Example](https://github.com/PhilippeTrounev/blazor-wasm-docsie-sample)
- [Razor Pages Example](https://github.com/PhilippeTrounev/razor-pages-docsie-sample)

## 🆘 Support

- **Discord**: [Join our community](https://discord.gg/rptfXQnq)
- **Email**: hello@docsie.io
- **Documentation**: [docs.docsie.io](https://docs.docsie.io)

## 📄 License

MIT License - Feel free to use this example in your projects.

---

**Built with Next.js 15, TypeScript, Tailwind CSS, and the Docsie Documentation Platform**
