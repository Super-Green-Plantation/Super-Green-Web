import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { GlobalProvider } from "@/components/providers/GlobalProvider";
import GlobalLoading from "@/components/GlobalLoading";
import ConnectionStatus from "@/components/ConnectionStatus";
import RouteLoader from "@/components/RouteLoader";
import { Suspense } from "react";

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
      <body>
        <GlobalProvider>
          <GlobalLoading />
          <ConnectionStatus />
          <Suspense fallback={null}>
            <RouteLoader />
          </Suspense>
          {children}
          <Analytics/>
          <Toaster position="top-center" richColors />
          <FloatingWhatsApp
              phone="94768059312"
              message="Hi! I need help!."
            />
        </GlobalProvider>
      </body>
    </html>
  );
}
