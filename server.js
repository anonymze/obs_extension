const PLAYER = "crocodyle";
const URL = `https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=${PLAYER}`;
// https://lounge.mkcentral.com/api/player/leaderboard?game=mkworld&season=0&search=crocodyle

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/leaderboard") {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
