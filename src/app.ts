import express from "express";
import { bookRoutesFactory } from "./routes/book-routes";
import { errorHandler } from "./errors/error-handler";

export const appFactory = () => {
    const app = express();
    const bookRoutes = bookRoutesFactory();

    app.use(express.json());
    app.use(errorHandler);
    app.use("/", bookRoutes);

    return app;
};
