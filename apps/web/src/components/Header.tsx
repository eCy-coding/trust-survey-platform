'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
  {href: '', labelEN: 'Home', labelTR: 'Ana Sayfa'},
  {href: '/thesis', labelEN: 'Thesis', labelTR: 'Tez'},
  {href: '/archive', labelEN: 'Archive', labelTR: 'Arşiv'},
  {href: '/services', labelEN: 'Services', labelTR: 'Hizmetler'},
  {href: '/management-organization', labelEN: 'M&O', labelTR: 'Y&O'},
];

export default function Header() {
  const pathname = usePathname() || '/en';
  const isTR = pathname.startsWith('/tr');
  const base = isTR ? '/tr' : '/en';

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href={base} className="font-bold tracking-tight">eCyPro Unified</Link>

        <div className="flex items-center gap-5">
          {links.map((l) => {
            const href = `${base}${l.href}`;
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm ${active ? 'font-semibold underline underline-offset-4' : 'opacity-80 hover:opacity-100'}`}
              >
                {isTR ? l.labelTR : l.labelEN}
              </Link>
            );
          })}
          <div className="h-5 w-px bg-gray-300 mx-1" />
          <Link href="/en" className={`px-2 rounded border ${!isTR ? 'bg-gray-100' : ''}`}>EN</Link>
          <Link href="/tr" className={`px-2 rounded border ${isTR ? 'bg-gray-100' : ''}`}>TR</Link>
        </div>
      </nav>
    </header>
  );
}
