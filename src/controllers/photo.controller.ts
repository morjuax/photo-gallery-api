import {Request, Response} from 'express'

export function helloWorld(req: Request, res: Response): Response {
    return res.send('Hello world');
}