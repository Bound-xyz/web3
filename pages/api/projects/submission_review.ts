import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "src/libs/supabase/client";

import { z } from "zod";

type ErrorRes = {
  error: string;
};

type SuccessRes = {
  name: string;
};

type Res = SuccessRes | ErrorRes;

const handlePost = z.object({
  userID: z.string(),
  projectID: z.string(),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  const request = handlePost.safeParse(JSON.parse(req.body));
  if (!request.success) {
    console.error(request.error);

    res.status(400).json({
      error: `Invalid Request`,
    });
    return;
  }

  // supabase
  const result = await supabase
    .from("project_members")
    .update({
      status: "SUBMISSION_REVIEW",
    })
    .eq("user_id", request.data.userID)
    .eq("project_id", request.data.projectID);

  if (result.error) {
    console.error(result.error);

    res.status(400).json({
      error: `Invalid Request`,
    });
    return;
  }

  res.status(201).json({
    name: "Successfully changed status to SUBMISSION_REVIEW",
  });
};
