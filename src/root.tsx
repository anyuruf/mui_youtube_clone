import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { MediaProvider } from 'media-chrome/react/media-store';

export function Layout({
  children,
}) {
  
  return (
    <html lang="en">
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

export default function Root() {
  return <Outlet />;
}
