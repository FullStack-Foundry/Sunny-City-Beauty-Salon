import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Sunny City Beauty Salon",
  description:
    "Professional beauty services at 7 Pell St, New York, NY 10013. Call 646-386-8898 to book an appointment.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
