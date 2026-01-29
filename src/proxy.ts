import type { NextRequest } from 'next/server';
import { detectBot } from '@arcjet/next';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import arcjet from '@/lib/Arcjet';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

// Arcjet
const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE',
    allow: [
      'CATEGORY:SEARCH_ENGINE',
      'CATEGORY:PREVIEW',
      'CATEGORY:MONITOR',
    ],
  }),
);

// ✅ clerkMiddleware MUST be the default export
export default clerkMiddleware(async (auth, req: NextRequest) => {
  // 1️⃣ Arcjet protection
  if (process.env.ARCJET_KEY) {
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  const { userId } = await auth();

  if (userId != null) {
    // 3️⃣ Fetch user correctly (NO currentUser)
    const { clerkClient } = await import('@clerk/nextjs/server');
    const user = await (await clerkClient()).users.getUser(userId);

    const onboarding = user.unsafeMetadata.onboarding as
      | { completed?: boolean; skipped?: boolean }
      | undefined;

    const needsOnboarding
      = !onboarding || (!onboarding.completed && !onboarding.skipped);

    if (needsOnboarding) {
      const url = req.nextUrl.clone();
      url.pathname = '/onboarding';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: '/((?!_next|_vercel|monitoring|.*\\..*|api/trpc).*)',
};
