import { ErrorRequestHandler } from "express";
import { CustomError } from "./custom-error";
import { getStringEnv } from "../util/env-variables-parser";

const isProduction = () => getStringEnv("NODE_ENV") === "production";

export const errorHandler: ErrorRequestHandler = (error: CustomError, _req, res, _next) => {
    const { errorCode, message, name, stack, statusCode } = error
    console.error(error);

    res.status(statusCode || 500);
    res.json({
        message,
        name,
        errorCode,
        stack: isProduction() ? {} : stack
    });
};
