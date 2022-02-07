import { Send } from 'express-serve-static-core';
import { Request, Response } from 'express';

export interface TRequest<T = any> extends Request {
    body: T;
}

export interface TResponse<T> extends Response {
    json: Send<T, any>;
}
