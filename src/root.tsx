import React from "react";
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import createEmotionCache from "./CreateCache";
import { CacheProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import AppTheme from "@/theme/AppTheme";
import NotificationsProvider from '@/hooks/useNotifications/NotificationsProvider';
import DialogsProvider from '@/hooks/useDialogs/DialogsProvider';
import {
    dataGridCustomizations,
    datePickersCustomizations,
    formInputCustomizations,
    sidebarCustomizations,
} from "@/theme/customizations";

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
        <title>Open Stream</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const cache = createEmotionCache();

const themeComponents = {
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...sidebarCustomizations,
    ...formInputCustomizations,
};

function RootElement (props: { disableCustomTheme?: boolean }) {
    return(
        <StyledEngineProvider injectFirst>
            <AppTheme {...props} themeComponents={themeComponents}>
                <NotificationsProvider>
                    <DialogsProvider>
                        <Outlet />
                    </DialogsProvider>
                </NotificationsProvider>
            </AppTheme>
        </StyledEngineProvider>
    );
}

export default function Root() {
    if (typeof window !== 'undefined') {
        return (
            <CacheProvider value={cache}>
                <RootElement />
            </CacheProvider>
        );
    }
    return (
        <RootElement />
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
