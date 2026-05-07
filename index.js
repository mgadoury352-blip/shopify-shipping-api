export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({ status: "online" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
