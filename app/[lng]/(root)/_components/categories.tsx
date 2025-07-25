"use client";

import CategoryCard from "@/components/cards/categoryCard";
import { categories } from "@/constants";
import useTranslate from "@/hooks/use-translate";

function Categories() {
  const t = useTranslate();

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl font-bold font-space-grotesk text-primary">
          {t("topCategories")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("topCategoriesDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
