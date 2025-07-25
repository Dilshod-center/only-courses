import { ICourse } from "@/types";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

function CourseCard({ course }: { course: ICourse }) {
  return (
    <Link href={`/courses/reactjs`} className="block w-full max-w-md mx-auto">
      <Card className="group w-full">
        <CardContent className="relative h-48 sm:h-52 md:h-56 w-full rounded-t-md overflow-hidden">
          <Image
            fill
            src={course.previewImage}
            alt={course.title}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority
          />
        </CardContent>

        <div className="my-4 flex flex-col space-y-2 px-3 sm:px-4">
          <h2 className="line-clamp-1 font-space-grotesk text-lg sm:text-xl font-bold">
            {course.title}
          </h2>
          <Separator />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={course.author.image}
                alt={course.author.name}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <p className="text-sm text-muted-foreground">
                {course.author.name}
              </p>
            </div>
            <div className="text-right space-y-0.5">
              <div className="text-xs text-muted-foreground line-through">
                {course.oldPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="text-sm font-bold">
                {course.currentPrice.toLocaleString("en-US", {
                  currency: "USD",
                  style: "currency",
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default CourseCard;
