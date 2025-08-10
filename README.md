# Trust Survey Platform — Monorepo

## Uygulamalar
- **apps/web**: Next.js (App Router)
- **cms**: Strapi v5 (SQLite dev)

## Geliştirme
- Strapi: `cd cms && npm run develop`
- Web:    `cd apps/web && npm run dev`

## Ortam
- `apps/web/.env.local` → `NEXT_PUBLIC_CMS_URL=http://localhost:1337`

## Dokümantasyon
- `docs/architecture.md`
- `docs/api.md`
- `docs/operations.md`
- `docs/roadmap.md`
