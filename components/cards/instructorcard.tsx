import { IInstructor } from "@/types";
import Image from "next/image";

type InstructorCardProps = {
  instructor: IInstructor;
};

function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="flex flex-col space-y-2 rounded-lg p-2 shadow-md transition hover:shadow-xl">
      <div className="relative h-72 w-full overflow-hidden rounded-md">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <h1 className="mt-2 font-space-grotesk text-xl font-bold">
        {instructor.name}
      </h1>
      <h3 className="text-sm text-muted-foreground">{instructor.job}</h3>
    </div>
  );
}

export default InstructorCard;
