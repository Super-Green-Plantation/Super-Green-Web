"use client";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
