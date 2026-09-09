// Entry point for hosting panels that require an Application startup file.
process.env.NODE_ENV = process.env.NODE_ENV || "production";

async function start() {
  const { createServer } = await import("node:http");
  const { default: next } = await import("next");

  const app = next({
    dev: process.env.NODE_ENV === "development",
    dir: __dirname,
  });
  const handle = app.getRequestHandler();
  await app.prepare();

  const server = createServer((req, res) => {
    handle(req, res).catch((error) => {
      console.error("Request failed:", error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.destroy();
      }
    });
  });

  server.on("error", (error) => {
    console.error("Server failed:", error);
    process.exit(1);
  });
  server.listen(Number(process.env.PORT || 3000), "0.0.0.0");
}

start().catch((error) => {
  console.error("Failed to start Next.js:", error);
  process.exit(1);
});
