import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './tailwind.css';

//To Attach StyleSheet we use link
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}
//To Give Name To Our Project
export const meta: MetaFunction = () => {
  return { title: 'Studio Ghibli', description: 'A description' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

