import { fastify } from "fastify"
import { getNumberEnv } from "./util/env-variables-parser";

const server = fastify({ logger: true });
const PORT = getNumberEnv('PORT') || 3000;

server.listen(PORT, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`);
})