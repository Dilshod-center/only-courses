"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import GlobalSearch from "./global-search";
import LanguageDropdown from "@/components/shared/language-dropdown";
import ModeToggle from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import UserBox from "@/components/shared/user-box";
import Mobile from "@/components/shared/mobile";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl h-full flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-xl text-foreground font-roboto">OnlyCourses</h1>
          <div className="flex max-md:hidden items-center gap-3 border-b pl-2">
            {navLinks.map((nav) => (
              <Link
                href={`/${nav.route}`}
                key={nav.route}
                className="font-medium transition-all hover:text-blue-500 hover:underline"
              >
                {t(nav.name)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mobile />
          <div className="flex max-md:hidden items-center gap-2 border-r pr-3">
            <GlobalSearch />
            <LanguageDropdown />
            <ModeToggle />
          </div>
          <div className="max-sm:hidden">
            <SignedIn>
              <UserBox />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant={"ghost"} size={"lg"} className="rounded-full">
                  Log In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant={"ghost"} size={"lg"} className="rounded-full">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
