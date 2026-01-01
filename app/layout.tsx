import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Super Green Plantation",
  description: "Super Green Plantation - Your Trusted Partner in Sustainable Agriculture",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics/>
      <Toaster />
      </body>
    </html>
  );
}
