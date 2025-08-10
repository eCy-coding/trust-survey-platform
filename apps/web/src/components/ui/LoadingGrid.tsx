export default function LoadingGrid({ rows = 6 }: { rows?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="p-4 rounded border">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-64 bg-gray-100 rounded mt-2" />
        </div>
      ))}
    </div>
  );
}
