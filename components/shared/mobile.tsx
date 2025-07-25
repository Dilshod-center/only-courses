"use client";

import LanguageDropdown from "./language-dropdown";
// import Logo from '@/components/shared/logo'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import { AlignCenter, ShoppingCart } from "lucide-react";
import Link from "next/link";

import ModeToggle from "@/components/shared/mode-toggle";
import { useTranslation } from "@/i18next/client";
import { useParams } from "next/navigation";
import Globalsearch from "@/app/[lng]/(root)/_components/global-search";

function Mobile() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <AlignCenter />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle asChild>
            <h1 className="text-xl text-foreground font-roboto">OnlyCourses</h1>
          </SheetTitle>
          <Separator />
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              href={`/${nav.route}`}
              key={nav.route}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <nav.icon className="size-5" />
              <span>{t(nav.name)}</span>
            </Link>
          ))}
          <LanguageDropdown />
          <div className="flex items-center justify-center gap-4">
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart />
            </Button>
            <Globalsearch />
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
