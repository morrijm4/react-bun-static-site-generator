import type { PropsWithChildren } from 'react';

export function Head({ children }: PropsWithChildren) {
  return (
    <>
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Your description here." />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="Your name" />
          <title>My Website</title>
        </head>
      </html>
      <body>{children}</body>
    </>
  );
}
