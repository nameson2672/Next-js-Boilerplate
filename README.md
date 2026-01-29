# SaaS Boilerplate

My opinionated Next.js starter for building SaaS products fast.

## What's Inside

- **Next.js 16** - App Router, Server Components, React 19
- **Authentication** - Clerk (drop-in auth solution)
- **Database** - PostgreSQL + Drizzle ORM (PGLite for local dev)
- **API** - tRPC for end-to-end type safety
- **UI** - Radix UI + Tailwind CSS 4
- **Security** - Arcjet (rate limiting, bot protection)
- **Analytics** - PostHog ready
- **Testing** - Vitest + Playwright
- **Monitoring** - Sentry integration

## Quick Start
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Clerk keys and other secrets

# Start development server (includes local database)
npm run dev
```

Visit `http://localhost:3000`

## Project Structure
```
src/
├── app/              # Next.js app router
├── components/       # React components
├── server/          # tRPC routers & server logic
├── models/          # Drizzle database schema
└── lib/             # Utilities & helpers
```

## Key Commands
```bash
npm run dev              # Start dev server
npm run build           # Production build
npm run lint            # Lint code
npm run test            # Run unit tests
npm run test:e2e        # Run E2E tests
npm run db:studio       # Open Drizzle Studio
```

## Environment Setup

Required variables (add to `.env.local`):
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `ARCJET_KEY` (optional, for security features)
- `NEXT_PUBLIC_POSTHOG_KEY` (optional, for analytics)

## Database

Local development uses PGLite (no Docker needed). For production, use any PostgreSQL provider.

After schema changes:
```bash
npm run db:generate    # Generate migration
npm run db:migrate     # Apply migration
```

## Why This Stack?

- **Fast to ship** - Zero config overhead
- **Type-safe** - tRPC + TypeScript end-to-end
- **Batteries included** - Auth, DB, UI, testing all configured
- **Production ready** - Security, monitoring, error tracking built-in

## Notes to Future Me

- Don't overthink it - this exists to move fast
- Update dependencies monthly
- Check `.env.example` when adding new services
- Keep components small and composable
- Write tests for critical user flows

