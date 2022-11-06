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
  console.log(req.body);

  const request = handlePost.safeParse(req.body);
  if (!request.success) {
    console.error(request.error);

    res.status(400).json({
      error: `Invalid Request`,
    });
    return;
  }

  // supabase
  const result = await supabase.from("project_members").insert({
    user_id: request.data.userID,
    project_id: request.data.projectID,
    status: "APPLICATION_REVIEW",
  });

  if (result.error) {
    console.error(result.error);

    res.status(400).json({
      error: `Invalid Request`,
    });
    return;
  }

  res.status(200).json({ name: "John Doe" });
};
