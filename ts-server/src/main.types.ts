import { Send } from 'express-serve-static-core';
import { Request, Response } from 'express';

export interface TRequest<T = any> extends Request {
    body: T;
}

export interface TResponse<ResBody = any> extends Express.Response {
    send: ResBody;
}
