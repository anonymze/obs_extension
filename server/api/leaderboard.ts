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
    // return res.status(200).json(data);
    return res.status(200).json({
      totalPlayers: 1,
      data: [
        {
          id: 72876,
          overallRank: 1430,
          countryCode: "FR",
          name: "Crocodyle",
          mmr: 5684,
          maxMmr: 5834,
          winRate: 0.5454545454545454545454545455,
          winsLastTen: 5,
          lossesLastTen: 5,
          gainLossLastTen: -134,
          eventsPlayed: 11,
          largestGain: 218,
          largestLoss: -218,
          noSQAverageScore: 84.8,
          noSQAverageScoreLastTen: 84.8,
          mmrRank: {
            division: "Ranked",
            name: "Ranked",
          },
          maxMmrRank: {
            division: "Ranked",
            name: "Ranked",
          },
        },
      ],
    });
  } catch (error) {
    return res.status(500).json({ error: "KO" });
  }
}
