const URL = `https://obsextension.vercel.app/`;

const getLeaderboardQuery = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

// {
//   "totalPlayers": 1,
//   "data": [
//     {
//       "id": 72876,
//       "overallRank": 1430,
//       "countryCode": "FR",
//       "name": "Crocodyle",
//       "mmr": 5684,
//       "maxMmr": 5834,
//       "winRate": 0.5454545454545454545454545455,
//       "winsLastTen": 5,
//       "lossesLastTen": 5,
//       "gainLossLastTen": -134,
//       "eventsPlayed": 11,
//       "largestGain": 218,
//       "largestLoss": -218,
//       "noSQAverageScore": 84.8,
//       "noSQAverageScoreLastTen": 84.8,
//       "mmrRank": {
//         "division": "Ranked",
//         "name": "Ranked"
//       },
//       "maxMmrRank": {
//         "division": "Ranked",
//         "name": "Ranked"
//       }
//     }
//   ]
// }
