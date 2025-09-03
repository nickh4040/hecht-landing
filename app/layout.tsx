import type { ReactNode } from "react";

export const metadata = {
  title: "Hecht Hospitality",
  description: "Modern stays in Scottsdale",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
