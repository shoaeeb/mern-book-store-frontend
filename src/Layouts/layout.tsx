import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between h-full w-full">
      <Header />
      {showHero && <Hero />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
