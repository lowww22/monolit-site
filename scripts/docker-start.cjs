/**
 * Timeweb / Docker entrypoint for Next.js standalone.
 * Forces bind on 0.0.0.0 — Docker overwrites HOSTNAME with the container name,
 * and Next.js server.js listens on process.env.HOSTNAME.
 */
process.env.PORT = process.env.PORT || "8080";
process.env.HOSTNAME = "0.0.0.0";

process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));

require("./server.js");
