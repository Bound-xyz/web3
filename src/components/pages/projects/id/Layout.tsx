import Image from "next/future/image";
import { ReactNode } from "react";
import { Button } from "src/components/Button";
import { Database } from "src/types/supabase";
import ProjectBackground from "../../../../../public/project/card-background.svg";

type Props = {
  project: Database["public"]["Tables"]["projects"]["Row"];
  companyLogoUrl: string;
  submitButtonLabel: ReactNode;
  onClickSubmit: () => void;
  onCLickJoinCommunity: () => void;
  onClickFollow: () => void;
};

export const ProjectPageLayout = ({ project, ...props }: Props) => {
  return (
    <div>
      <div className="p-16 sm:grid grid-cols-2 gap-x-10 bg-[url('/project/hero-background.svg')]">
        <div>
          <div className="h-[40px] w-[120px] relative flex justify-start">
            <Image
              fill
              src={props.companyLogoUrl}
              alt="company logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="font-bold text-3xl">{project.name}</h1>
          <div className="mt-3 tracking-widest">
            {project.start_date} <span className="mx-1">-</span>
            {project.end_date}
          </div>
          <div className="mt-8 w-9/12">
            <Button onClick={props.onClickSubmit}>
              {props.submitButtonLabel}
            </Button>

            <div className="mt-8 grid grid-cols-2 gap-x-4">
              <Button onClick={props.onCLickJoinCommunity} type="outlined">
                Join Community
              </Button>
              <Button onClick={props.onClickFollow} type="outlined">
                Follow
              </Button>
            </div>
          </div>
          <p className="mt-6 text-sm">
            プロジェクトのコミュニティーに参加すると、担当者と参加者に質問や交流できます！
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={ProjectBackground} alt="project-background" />
        </div>
      </div>

      <div className="sm:flex p-16 gap-x-10">
        <div className="max-w-xl">
          <h2 className="font-semibold text-4xl">Project Details</h2>
          <p className="mt-4 text-lg">{project.description}</p>

          <h2 className="mt-8 font-semibold text-4xl">Required Skill</h2>
          <ul className="mt-4 list-disc list-inside">
            {project.requirements.map((req) => (
              <li className="text-lg" key={req}>
                {req}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-semibold text-4xl">Holder Requirement</h2>
          <ul className="mt-4 list-disc list-inside">
            <li>
              少なくとも1つのデータ分析関連のCertification SBTかProjectSBTの保持
            </li>
          </ul>

          <h2 className="mt-8 font-semibold text-4xl">Utility</h2>

          <ul className="mt-4 list-disc list-inside">
            {project.utilities.map((util) => (
              <li className="text-lg" key={util}>
                {util}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <div className="mx-auto sticky top-0 shadow-project bg-white min-w-[320px] max-w-md p-6 rounded-md">
            <h4 className="font-semibold text-xl">What you can get</h4>
            <div className="mt-4 grid grid-cols-2 gap-y-2">
              <div>PRICE</div>
              <div className="font-semibold">100</div>

              <div>CRYPT</div>
              <div className="font-semibold">MATIC</div>

              <div>TYPE</div>
              <div className="font-semibold">Project SBT</div>
            </div>
            {/* TODO: ProgressBarの作成 */}

            <div className="mt-8">
              <Button onClick={props.onClickSubmit}>
                {props.submitButtonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
