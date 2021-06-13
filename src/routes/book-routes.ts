import { Router } from "express";
import { URIs } from "./uris"
// import { bookControllerFactory } from "../controllers/book-controller";

export const bookRoutesFactory = () => {
    const router = Router();
    const { BOOKS } = URIs;
    // const { collect, find, create, remove } = bookControllerFactory();

    router.get(BOOKS, (_req, res, _next) => {
        res.send("elo");
    })
    // router.get(`${BOOKS}/:id`, find)
    // router.post(BOOKS, create)
    // router.delete(`${BOOKS}/:id`, remove)

    return router;
};
