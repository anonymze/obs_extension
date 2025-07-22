const PLAYER = "crocodyle";
const URL = `https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=${PLAYER}`;
// https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=crocodyle

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    // filter by player name in url params instead of hardcoding
    if (url.pathname !== "/api/leaderboard") {
      return new Response("Not Found", { status: 404 });
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(URL);
      const data = await response.json();
      return Response.json(data, { headers });
    } catch (error) {
      return Response.json(
        { error: "KO" },
        {
          status: 500,
          headers,
        },
      );
    }
  },
});

console.log(`Server running at http://localhost:${server.port}`);
