import { VercelRequest, VercelResponse } from "@vercel/node";

const PLAYER = "crocodyle"; // avoid hardcoding, get the player by the params URL
const URL = `https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=${PLAYER}`;
// https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=crocodyle

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "KO" });
  }
}
