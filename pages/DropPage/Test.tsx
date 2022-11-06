import type { NextApiRequest, NextApiResponse } from "next";
import { envs } from "src/configs/env/env";
type Data = {
  name: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(envs);

  res.status(200).json({ name: "John Doe" });
};
