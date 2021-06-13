export class CustomError extends Error {
    constructor(readonly errorCode: string, readonly statusCode: number) {
        super();
    }
}
