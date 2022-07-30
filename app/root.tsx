import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from './tailwind.css';

//Links Function:Is used to Link Stylesheets to our Application
//Here We Have Added StyleSheets
export const links:LinksFunction = ()=>{
  return [{rel:'stylesheet', href:'styles'}];

}
//Meta Functions:Are used for Purposes like SEO,Title, Description etc
//Will Add title to our Application
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Studio Ghibli",
  viewport: "width=device-width,initial-scale=1",
  description:'A Description'
});


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
