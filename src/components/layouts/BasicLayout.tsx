import { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface BasicLayoutProps {
  children: ReactNode;
}

export function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
