"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center">
      <Image
        width={120}
        height={120}
        src="/logo-cropped.png"
        alt="logo"
      />
    </Link>
  );
}
