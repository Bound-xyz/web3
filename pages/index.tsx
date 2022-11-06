import { PostgrestResponse } from "@supabase/supabase-js";
import { useAddress, useUser } from "@thirdweb-dev/react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { ProjectCard } from "src/components/ProjectCard";
import { supabase } from "src/libs/supabase/client";
import { Database } from "src/types/supabase";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h2 className="font-bold text-3xl text-center">Projects</h2>
        <p className="mt-4 text-center textlg">
          これまでのスキルを活かせる新しいプロジェクトに参加してみよう！
        </p>

        <div className="mt-10 flex gap-6 overflow-auto">
          {projects.data?.length
            ? projects.data.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  projects: PostgrestResponse<Database["public"]["Tables"]["projects"]["Row"]>;
}> = async () => {
  const projects = await supabase.from("projects").select("*");
  if (projects.error) {
    console.error(projects.error);
  }
  return {
    props: {
      projects: projects,
    },
    revalidate: 60 * 60,
  };
};

export default Home;
