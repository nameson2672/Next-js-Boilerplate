import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { ThemeProvider } from '../../components/theme-provider';

export default async function Layout(props: { children: React.ReactNode }) {
  const signInUrl = '/sign-in';
  const signUpUrl = '/sign-up';
  const dashboardUrl = '/dashboard';
  const afterSignOutUrl = '/';

  return (
    <>
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </ClerkProvider>
    </>
  );
}
