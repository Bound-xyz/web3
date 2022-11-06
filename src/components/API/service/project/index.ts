export const applyProject = async (userID: string, projectID: string) => {
  const res = await fetch("/api/projects/apply", {
    method: "post",
    body: JSON.stringify({
      userID: userID,
      projectID: projectID,
    }),
  });

  if (res.status == 201) {
    return true;
  }
  return false;
};

// 管理アプリに本来はあるAPI
export const changeStatus = async (
  userID: string,
  projectID: string,
  status: string
) => {
  const res = await fetch("/api/projects/" + status.toLowerCase(), {
    method: "post",
    body: JSON.stringify({
      userID: userID,
      projectID: projectID,
    }),
  });

  if (res.status === 201) {
    return true;
  }
  return false;
};
