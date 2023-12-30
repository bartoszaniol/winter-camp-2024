import type { NextApiRequest, NextApiResponse } from "next";
import chosenCrew from "../../lib/crew";
/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lists = await chosenCrew();
  res.status(200).json(lists);
}
