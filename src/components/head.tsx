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
          <meta
            name="description"
            content="Matthew Morrison's personal website."
          />
          <meta
            name="keywords"
            content="JavaScript, coding, programming, web development"
          />
          <meta name="author" content="Matthew Morrison" />
          <title>morrjm4's blog</title>
        </head>
      </html>
      <body>{children}</body>
    </>
  );
}
