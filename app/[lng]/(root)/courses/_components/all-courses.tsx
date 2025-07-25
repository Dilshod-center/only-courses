"use client";

import CourseCard from "@/components/cards/courseCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses, filterCourses, filterLevels } from "@/constants";
import useTranslate from "@/hooks/use-translate";

function AllCourses() {
  const t = useTranslate();

  return (
    <section className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-medium text-foreground">
          {t("result")}{" "}
          <span className="font-space-grotesk font-bold text-xl text-primary">
            250
          </span>{" "}
          {t("result2")}
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t("sortBy")}</span>
            <Select>
              <SelectTrigger className="w-[140px] bg-gradient-to-r from-secondary to-background text-sm">
                <SelectValue placeholder={t("filter")} />
              </SelectTrigger>
              <SelectContent>
                {filterCourses.map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    {t(item.label)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t("level")}</span>
            <Select>
              <SelectTrigger className="w-[140px] bg-gradient-to-l from-secondary to-background text-sm">
                <SelectValue placeholder={t("level")} />
              </SelectTrigger>
              <SelectContent>
                {filterLevels.map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    {t(item.label)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}

export default AllCourses;
