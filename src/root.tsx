import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { MediaProvider } from 'media-chrome/react/media-store';
import type { Route } from "./+types/root";
import createEmotionCache from "./CreateCache";
import AppTheme from './Theme';

export function Layout({
  children,
}: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>OpenStream</title>
        <Meta />
        <Links />
      </head>
      <body>
        <MediaProvider >
        {children}
        <ScrollRestoration />
        <Scripts />
        </MediaProvider>
      </body>
    </html>
  );
}

const cache = createEmotionCache();

export default function Root() {
    if (typeof window !== 'undefined') {
        return (
            <CacheProvider value={cache}>
                <AppTheme>
                    <Outlet />
                </AppTheme>
            </CacheProvider>
        );
    }
    return (
        <AppTheme>
            <Outlet />
        </AppTheme>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details =
            error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <Box component="main" sx={{ pt: 8, p: 2, maxWidth: 'lg', mx: 'auto' }}>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <Box component="pre" sx={{ width: '100%', p: 2, overflowX: 'auto' }}>
                    <code>{stack}</code>
                </Box>
            )}
        </Box>
    );
}
