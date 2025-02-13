import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Generated by create next app",
};

export default function NestedLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <nav>
        {children}
    </nav>
  );
}
