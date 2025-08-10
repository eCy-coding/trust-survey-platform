export async function safeFetchJSON(url: string, init: RequestInit = {}) {
  try {
    console.log('[fetch] ->', url);
    const r = await fetch(url, { cache: 'no-store', ...init });
    const ct = r.headers.get('content-type') || '';
    if (!r.ok) {
      const text = await r.text().catch(() => '');
      console.error('[fetch error]', r.status, r.statusText, text.slice(0, 200));
      return { data: [] };
    }
    if (!ct.includes('application/json')) {
      const text = await r.text().catch(() => '');
      console.error('[non-json response]', ct, text.slice(0, 200));
      return { data: [] };
    }
    return await r.json();
  } catch (e) {
    console.error('[fetch exception]', e);
    return { data: [] };
  }
}
