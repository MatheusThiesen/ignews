import { NextApiRequest, NextApiResponse } from "next";

export default function (_req: NextApiRequest, res: NextApiResponse) {
  res.send([
    {
      nome: "Matheus",
      email: "matheus@gmail.com",
    },
    {
      nome: "Teste",
      email: "test@gmail.com",
    },
  ]);
}
