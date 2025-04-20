"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/header/Logo";
import { NavLink } from "@/components/header/NavLink";
import { MobileMenu } from "@/components/header/MobileMenu";
import ContactForm from "./ContactForm";
import messages from "@/messages/fr.json";

export default function Header() {
  const t = messages.Header;

  const links = [
    { href: "#about", label: t.about },
    { href: "#services", label: t.services },
    { href: "#contact", label: t.contact },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            asChild
            className="bg-[#2C7E89] hover:bg-[#14302F] text-white transition-colors duration-300 px-6 py-2 rounded-full text-base font-semibold
            
            md:h-12 md:px-8 md:py-4"
          >
            <ContactForm label={t.bookNow} />
          </Button>
          <MobileMenu links={links} />
        </div>
      </div>
    </motion.header>
  );
}
