"use client";

import CourseCard from "@/components/cards/courseCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courses, filterCourses } from "@/constants";
import useTranslate from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { useState } from "react";

function FeaturedCourses() {
  const [filter, setFilter] = useState("all");
  const t = useTranslate();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col space-y-1">
          <h1 className="font-space-grotesk text-3xl font-bold">
            {t("exploreCourses")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("exploreCoursesDescription")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 max-md:w-full max-md:justify-start">
          {filterCourses.map((item) => (
            <Button
              key={item.name}
              variant={filter === item.name ? "secondary" : "ghost"}
              className={cn(
                "rounded-full font-medium",
                "max-md:flex-1 max-md:justify-center",
                filter === item.name && "text-primary"
              )}
              onClick={() => setFilter(item.name)}
            >
              {t(item.label)}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:hidden">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <Carousel opts={{ align: "start" }} className="mt-8 hidden md:block">
        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem key={course.title} className="md:basis-1/2 lg:basis-1/3">
              <CourseCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default FeaturedCourses;
