import { Router } from "express";
import { bookControllerFactory } from "../controllers/book-controller";

export const bookRoutesFactory = () => {
    const router = Router();
    const URI = "/books";
    const { collect, find, create, remove } = bookControllerFactory();

    router.get(URI, collect)
    router.get(`${URI}/:id`, find)
    router.post(URI, create)
    router.delete(`${URI}/:id`, remove)

    return router;
}