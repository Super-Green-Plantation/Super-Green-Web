import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Super Green Plantation",
  description: "Super Green Plantation - Your Trusted Partner in Sustainable Agriculture",
  icons: {
    icon: "/favicon.png",
  },
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
      <FloatingWhatsApp
          phone="94768059312"
          message="Hi! I need help!."
        />
      </body>
    </html>
  );
}
