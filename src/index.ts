import { getNumberEnv, getStringEnv } from "./util/env-variables-parser";
import { appFactory } from "./app";

(() => {
    const PORT = getNumberEnv("PORT") || 3000;
    const HOST = getStringEnv("HOST") || "127.0.0.1";
    const app = appFactory();

    app.listen(PORT, HOST, () => {
        console.log(`Example app listening at ${HOST}:${PORT}`)
    });
})();