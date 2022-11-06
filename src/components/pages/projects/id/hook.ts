import { useUser } from "@thirdweb-dev/react";
import { mint } from "src/components/API/service/nft";
import { useCallback, useEffect, useState } from "react";
import { applyProject, changeStatus } from "src/components/API/service/project";
import { supabase } from "src/libs/supabase/client";
import { ProjectStatus, PROJECT_STATUS } from "src/types/Status";
import { Database } from "src/types/supabase";

type Props = {
  project: Database["public"]["Tables"]["projects"]["Row"];
};

export const useProjectPageLayout = (props: Props) => {
  const [submitButtonLabel, setSubmitButtonLabel] = useState<string>("");
  const { user } = useUser();
  const [currentStatus, setCurrentState] = useState<ProjectStatus | null>(null);
  const [hasMinted, setHasMinted] = useState<boolean>(false);

  const fetchCurrentStatus = useCallback(
    async (userID: string) => {
      const res = await supabase
        .from("project_members")
        .select("id,status")
        .match({
          user_id: userID,
          project_id: props.project.id,
        })
        .single();

      if (res.error || !res.data) return setCurrentState(null);

      setCurrentState(res.data.status as ProjectStatus);
    },
    [props.project.id]
  );

  useEffect(() => {
    const u = user as {
      id: string;
      address: string;
    };
    if (u && u.id) {
      fetchCurrentStatus(u.id);
    }
  }, [fetchCurrentStatus, user]);

  const onClickSubmit = async () => {
    if (!user) {
      alert("ログインしてください！");
      return;
    }
    const u = user as { id: string; address: string };

    let res;
    switch (currentStatus) {
      case null:
        res = await applyProject(u.id, props.project.id);
        break;
      case PROJECT_STATUS.APPLICATION_REVIEW:
        res = await changeStatus(
          u.id,
          props.project.id,
          PROJECT_STATUS.WORKING
        );
        break;
      case PROJECT_STATUS.WORKING:
        res = await changeStatus(
          u.id,
          props.project.id,
          PROJECT_STATUS.SUBMISSION_REVIEW
        );
        break;
      case PROJECT_STATUS.SUBMISSION_REVIEW:
        res = await changeStatus(
          u.id,
          props.project.id,
          PROJECT_STATUS.COMPLETE
        );
        break;
      case PROJECT_STATUS.COMPLETE:
        res = await mint(u.address);
        break;
    }

    if (res) {
      switch (currentStatus) {
        case null:
          setCurrentState(PROJECT_STATUS.APPLICATION_REVIEW);
          break;
        case "APPLICATION_REVIEW":
          setCurrentState(PROJECT_STATUS.WORKING);
          break;
        case "SUBMISSION_REVIEW":
          setCurrentState(PROJECT_STATUS.COMPLETE);
          break;
      }
    } else {
      alert("失敗しました");
    }
  };
  const onCLickJoinCommunity = () => {
    console.debug("Clicked Join Community");
  };
  const onClickFollow = () => {
    console.debug("Clicked Follow");
  };

  const nameSubmitButtonLabel = useCallback(() => {
    let label = "";
    switch (currentStatus) {
      case PROJECT_STATUS.APPLICATION_REVIEW:
        label = "APPLICATION_REVIEW";
        break;
      case PROJECT_STATUS.WORKING:
        label = "WORKING";
        break;
      case PROJECT_STATUS.SUBMISSION_REVIEW:
        label = "SUBMISSION REVIEW";
        break;
      case PROJECT_STATUS.COMPLETE:
        // この中でミントしたかで別れる
        label = hasMinted ? "MINTED🎉" : "READY TO MINT🌿";
        break;
      default:
        label = "APPLY👋";
    }
    setSubmitButtonLabel(label);
  }, [currentStatus, hasMinted]);

  useEffect(() => {
    nameSubmitButtonLabel();
  }, [currentStatus, nameSubmitButtonLabel]);

  return {
    submitButtonLabel,
    onClickSubmit,
    onCLickJoinCommunity,
    onClickFollow,
  };
};
