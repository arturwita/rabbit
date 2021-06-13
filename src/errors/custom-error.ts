export class CustomError extends Error {
    constructor(readonly message: string, readonly statusCode: number, readonly errorCode: string) {
        super();
    }
}
