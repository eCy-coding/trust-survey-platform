const CMS = process.env.NEXT_PUBLIC_CMS_URL;

export async function fetchCMS(path: string) {
  const res = await fetch(`${CMS}${path}`, {next: {revalidate: 30}});
  if (!res.ok) throw new Error('CMS fetch failed');
  return res.json();
}
