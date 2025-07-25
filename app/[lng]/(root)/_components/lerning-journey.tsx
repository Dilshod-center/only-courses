"use client";

import { learningJourney } from "@/constants";
import useTranslate from "@/hooks/use-translate";
import Image from "next/image";

function LearningJourney() {
  const t = useTranslate();

  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="font-space-grotesk text-3xl sm:text-4xl font-bold">
          {t("learnJourney")}
        </h1>
        <p className="mt-2 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground">
          {t("learnJourneyDescription")}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningJourney.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center rounded-xl bg-primary p-6 text-center shadow-md transition hover:scale-[1.02]"
          >
            <Image
              src={item.image}
              alt={t(item.title)}
              width={70}
              height={70}
              className="object-contain"
            />
            <h2 className="mt-3 line-clamp-1 font-space-grotesk text-lg font-semibold text-secondary">
              {t(item.title)}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-secondary">
              {t(item.excerpt)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningJourney;
