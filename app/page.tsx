import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Docsie Next.js Integration Examples</h1>
        <p className="text-xl text-gray-600">
          Learn how to embed Docsie documentation into your Next.js applications
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link
          href="/public-docs"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">📖 Public Docs</h2>
          <p className="text-gray-700">
            Embed publicly accessible documentation with a single deployment key.
          </p>
        </Link>

        <Link
          href="/secure-docs"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">🔒 Secure Docs</h2>
          <p className="text-gray-700">
            JWT-authenticated documentation for enterprise and private content.
          </p>
        </Link>

        <Link
          href="/inapp-help"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">❓ In-App Help</h2>
          <p className="text-gray-700">
            Contextual help widget with search, tours, and knowledge base.
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-semibold mb-4">Features</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Next.js App Router with Server & Client Components</li>
          <li>✅ Server-side JWT generation via API Routes</li>
          <li>✅ TypeScript support</li>
          <li>✅ Tailwind CSS styling</li>
          <li>✅ Production-ready examples</li>
        </ul>
      </div>
    </div>
  );
}
