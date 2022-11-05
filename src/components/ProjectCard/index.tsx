import Image from "next/image";
import Link from "next/link";
import { Database } from "src/types/supabase";
import { format } from "date-fns";

type Props = {
  project: Database["public"]["Tables"]["projects"]["Row"];
};

export const ProjectCard = ({ project }: Props) => (
  <div className="flex flex-col p-4 shadow bg-white w-80 h-96 rounded-lg">
    <div className="relative w-full h-24">
      <Image
        src={project.thumbnail_uri}
        alt={`project image of ${project.name}`}
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="mt-6">
      {format(new Date(project.start_date), "yyyy-MM-dd")}
      <span className="m-2">-</span>
      {format(new Date(project.end_date), "yyyy-MM-dd")}
    </div>
    <h3 className="mt-4 text-xl">{project.name}</h3>
    <Link href={`projects/${project.id}`} passHref>
      <a className="mt-4">View More</a>
    </Link>
  </div>
);
