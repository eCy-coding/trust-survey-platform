import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-10 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2 opacity-80">Page not found</p>
        <Link href="/en" className="mt-6 inline-block px-4 py-2 rounded bg-blue-600 text-white">
          Go Home
        </Link>
      </div>
    </main>
  );
}
