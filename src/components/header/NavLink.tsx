"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative group ${className || ""}`}
      onClick={onClick}
    >
      <span className="text-lg text-gray-600 group-hover:text-[#2C7E89] transition-colors duration-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2C7E89] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
}
