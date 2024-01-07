import { createHandler, StartServer } from "@solidjs/start/server";

const description =
  "Practice violin finger patterns with interactive diagrams, scales, exercises, and a quiz." as const;

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width,initialscale=1.0" />

          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a21caf" />
          <meta name="msapplication-TileColor" content="#fdf4ff" />
          <meta name="theme-color" content="#fdf4ff" />
          <meta name="application-name" content="Violin Finger Patterns" />
          <meta
            name="apple-mobile-web-app-title"
            content="Violin Finger Patterns"
          />

          <meta property="og:title" content="Violin Finger Patterns" />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:description" content={description} />
          <link rel="sitemap" href="/sitemap-index.xml" />
          <title>Violin Finger Patterns</title>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));

/* TODO:
 *
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={imageUrl} />
*/
