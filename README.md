<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# GangLion.OS

GangLion.OS is a multi-tenant platform for managing independent CRM instances.
Platform administration and CRM operations use separate route groups and
layouts: `/admin` is platform scope, while `/crm` is CRM scope.

## Current architecture

- Platform routes manage organizations, platform users, and CRM instances.
- An organization can own multiple CRM instances. CRM users can switch between
  the instances available through their organization memberships.
- CRM operational records are associated with a `CrmInstance` and CRM queries
  are scoped to the active instance.
- CRM navigation labels, visibility, and ordering are stored per instance.
  Platform administrators configure these settings from an instance's detail
  page. Navigation destinations are restricted to implemented modules.
- Platform administrator access is checked on the server and remains separate
  from CRM organization membership.

The current CRM includes dashboard, leads, contacts, companies, and tasks.
CRM-specific roles and permissions, configurable modules and forms, dashboard
widgets, workflows, branding, and content labels beyond navigation are not yet
implemented. Organization membership currently grants CRM access; a separate
CRM-level role and permission engine remains a future migration step.

## Development

Install dependencies and configure the PostgreSQL connection using the
repository's Prisma configuration. Apply pending migrations before starting
the application:

```bash
npm install
npx prisma migrate deploy
npx prisma generate
npm run dev
```

Run `npm run lint` to check the application.
>>>>>>> origin/main
