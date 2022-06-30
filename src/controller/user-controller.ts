import { Request, Response, Router } from 'express';

export class UserController {
  private _router = Router();

  public get router() {
    return this._router;
  }

  constructor() {
    this._router.get('/', (_: Request, res: Response) => {
      res.send('Anything here!!');
    });
  }
}
