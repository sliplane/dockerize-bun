const server = Bun.serve({
  port: 3000,
  fetch() {
    return new Response("This is running in Docker!");
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
