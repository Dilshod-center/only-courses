"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { companies } from "@/constants";
import useTranslate from "@/hooks/use-translate";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

function Hero() {
  const t = useTranslate();

  return (
    <>
      <section className="container mx-auto max-w-6xl px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold font-space-grotesk leading-tight">
            {t("heroTitle")}{" "}
            <span className="text-blue-500">{t("heroTitleSpan")}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("heroDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                {t("findCourses")}
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" className="rounded-full w-full sm:w-auto">
                {t("blogs")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/hero.png"
            alt="hero"
            width={500}
            height={500}
            priority
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
      </section>

      <div className="w-full bg-secondary py-6">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="container mx-auto w-full max-w-6xl px-4"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {companies.map((Icon, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="flex justify-center">
                  <Icon className="h-16 sm:h-20 text-muted-foreground w-auto" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
