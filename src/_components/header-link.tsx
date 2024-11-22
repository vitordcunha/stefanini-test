"use client";

import { cn } from "@/_lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  to: string;
  children: string;
}

const HeaderLink = ({ children, to: href }: HeaderLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-header-foreground font-light hover:text-white transition-colors",
        {
          "text-white font-bold": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
