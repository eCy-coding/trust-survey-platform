'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const base = pathname.startsWith('/tr') ? '/tr' : '/en';

  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href={`${base}`} className="font-bold">eCyPro Unified</Link>
        <div className="flex items-center gap-4">
          <Link href={`${base}/thesis`}>Tez</Link>
          <Link href={`${base}/archive`}>Arşiv</Link>
          <Link href={`${base}/services`}>Hizmetler</Link>
          <Link href={`${base}/management-organization`}>Y&O</Link>
          <a href="/en" className="px-2 border rounded">EN</a>
          <a href="/tr" className="px-2 border rounded">TR</a>
        </div>
      </nav>
    </header>
  );
}
