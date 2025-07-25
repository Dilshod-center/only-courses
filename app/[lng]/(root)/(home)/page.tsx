import React from "react";
import Hero from "../_components/hero";
import Categories from "../_components/categories";
import Instructor from "../_components/instructor";
import LearningJourney from "../_components/lerning-journey";
import FeaturedCourses from "../_components/featured-courses";

function Page() {
  return (
    <div className="mt-28 font-spaceGrotesk text-xl font-bold">
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Instructor />
      <LearningJourney />
    </div>
  );
}

export default Page;
