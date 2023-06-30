// app/layout.tsx

'use client'

import { Providers } from "./providers";
import UserMenu from './components/templates/UserMenu'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}