export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";

export async function api(path: string, init?: RequestInit) {
  const res = await fetch(${API_URL}, { next: { revalidate: 60 }, ...init });
  if (!res.ok) throw new Error(\API \\);
  return res.json();
}