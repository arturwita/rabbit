import { ErrorRequestHandler } from "express";
import { CustomError } from "./custom-error";

export const errorHandler: ErrorRequestHandler = (error: CustomError, _req, res, _next) => {
    const { errorCode, message, statusCode } = error
    console.error(error);

    res.status(statusCode || 500);
    res.json({
        message,
        errorCode,
    });
};
