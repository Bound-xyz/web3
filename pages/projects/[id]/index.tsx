import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { supabase } from "pages/api/auth/[...thirdweb]";
import { ParsedUrlQuery } from "querystring";
import { ProjectPageLayout } from "src/components/pages/projects/id/Layout";
import { Database } from "src/types/supabase";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

interface Params extends ParsedUrlQuery {
  id: string;
}

export default (props: Props) => (
  <ProjectPageLayout
    companyLogoUrl={props.project.thumbnail_uri}
    // TODO ステータスに応じて変動させる
    // hooksの作成も
    submitButtonLabel="APPLY👋"
    onClickSubmit={function (): void {
      throw new Error("Function not implemented.");
    }}
    onCLickJoinCommunity={function (): void {
      throw new Error("Function not implemented.");
    }}
    onClickFollow={function (): void {
      throw new Error("Function not implemented.");
    }}
    {...props}
  />
);

type Response = {
  project: Database["public"]["Tables"]["projects"]["Row"];
  company: Database["public"]["Tables"]["companies"]["Row"];
};

export const getStaticProps: GetStaticProps<Response> = async ({ params }) => {
  const { id } = params as Params;

  const res = await supabase
    .from("projects")
    .select(`*, companies(*)`)
    .eq("id", id)
    .single();

  if (res.error || !res.data) {
    console.error(res.error);
    return {
      revalidate: 30,
      notFound: true,
    };
  }

  const project = res.data as Response["project"] & {
    companies: Response["company"];
  };

  return {
    props: {
      project: project,
      company: project.companies,
    },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const projects = await supabase
    .from("projects")
    .select("id")
    .returns<{ id: string }>();
  if (projects.error) {
    console.error(`Error in getStaticPaths: `, projects.error);
  }

  const paths =
    projects.data?.map((project) => ({
      params: {
        id: project.id,
      },
    })) ?? [];

  return {
    paths: paths,
    fallback: "blocking",
  };
};
