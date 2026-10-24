# GangLion.OS

GangLion.OS is a multi-organization CRM platform built with Next.js App Router.
The application includes a Supabase-backed sign-in flow and a protected master
dashboard, alongside platform administration and customer CRM routes.

## Development

Install dependencies, configure the environment variables required by the
services you use, then start the development server:

```bash
npm install
npm run dev
```

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` to validate changes.

Prisma-backed platform and CRM features require `DATABASE_URL`. Apply schema
migrations with `npm run db:migrate` and regenerate the Prisma client with
`npm run db:generate`.
