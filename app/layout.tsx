import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen max-h-screen overflow-hidden">
        <SessionProvider>
          <SidebarProvider>
            <main className="flex-1 overflow-y-auto">{children}</main>
            <Toaster />
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
