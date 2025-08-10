export default function Empty({ title = "No data", subtitle = "" }: { title?: string; subtitle?: string }) {
  return (
    <div className="text-center py-16 opacity-80">
      <div className="text-lg font-semibold">{title}</div>
      {subtitle ? <div className="text-sm mt-1">{subtitle}</div> : null}
    </div>
  );
}
