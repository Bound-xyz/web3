import { useCallback, useEffect, useState } from "react";
import { ProjectStatus, PROJECT_STATUS } from "src/types/Status";
import { Database } from "src/types/supabase";

type Props = {
  project: Database["public"]["Tables"]["projects"]["Row"];
  currentStatus: ProjectStatus | null;
};

export const useProjectPageLayout = (props: Props) => {
  const [submitButtonLabel, setSubmitButtonLabel] = useState<string>("");

  const onClickSubmit = () => {
    // TODO
    console.debug(props.currentStatus);
  };
  const onCLickJoinCommunity = () => {
    console.debug("Clicked Join Community");
  };
  const onClickFollow = () => {
    console.debug("Clicked Follow");
  };

  const nameSubmitButtonLabel = useCallback(() => {
    let label = "";
    switch (props.currentStatus) {
      case null:
        label = "APPLY👋";
        break;
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
        label = "MINT";
        label = "MINTED🎉";
        break;
    }
    setSubmitButtonLabel(label);
  }, [props.currentStatus]);

  useEffect(() => {
    nameSubmitButtonLabel();
  }, [props.currentStatus, nameSubmitButtonLabel]);

  return {
    submitButtonLabel,
    onClickSubmit,
    onCLickJoinCommunity,
    onClickFollow,
  };
};
