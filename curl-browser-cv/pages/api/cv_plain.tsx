import { NextApiRequest, NextApiResponse } from "next";
import { CVGenerator } from "../../lib/cv-generator";
import { cvData } from "../../lib/cv-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const generator = new CVGenerator(false);
  const cv = generator.generate(cvData);
  // const cv = "TEST_NO_COLOR";

  res.send(cv);
}
