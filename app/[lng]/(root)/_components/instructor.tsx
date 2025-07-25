"use client";

import InstructorCard from "@/components/cards/instructorcard";
import { Button } from "@/components/ui/button";
import { instructors } from "@/constants";
import useTranslate from "@/hooks/use-translate";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

function Instructor() {
  const t = useTranslate();

  return (
    <section className="container mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-space-grotesk text-3xl font-bold">
            {t("learnInstructors")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("learnInstructorsDescription")}
          </p>
        </div>

        <Button variant="secondary" className="w-max">
          <span>{t("viewAll")}</span>
          <MoveUpRight className="ml-2 size-5 font-bold" />
        </Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </div>

      <div className="mt-10 text-center text-sm">
        {t("becomeInstructor1")}{" "}
        <Link
          href="/become-instructor"
          className="text-primary underline hover:text-primary/80"
        >
          {t("becomeInstructor2")}
        </Link>
      </div>
    </section>
  );
}

export default Instructor;
