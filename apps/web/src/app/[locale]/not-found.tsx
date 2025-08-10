export default function NotFound(){
  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2 opacity-80">Page not found</p>
        <a href="/en" className="mt-6 inline-block px-4 py-2 rounded bg-blue-600 text-white">Go Home</a>
      </div>
    </main>
  );
}
