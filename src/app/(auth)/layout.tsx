import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { TRPCReactProvider } from '../../trpc/react';

export default async function AuthLayout(props: {
  children: React.ReactNode;
}) {
  const signInUrl = '/sign-in';
  const signUpUrl = '/sign-up';
  const dashboardUrl = '/dashboard';
  const afterSignOutUrl = '/';

  return (
    <ClerkProvider
      appearance={{
        theme: shadcn,
        cssLayerName: 'clerk', // Ensure Clerk is compatible with Tailwind CSS v4
      }}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      <TRPCReactProvider>
        {props.children}
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
