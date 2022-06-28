import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { UserController } from './controller/user-controller';

export class App {
  private _server: Application;

  public get server() {
    return this._server;
  }

  constructor() {
    this._server = express();
    this.setConfig();
    this.setControllers();
  }

  private setConfig() {
    this._server.use(bodyParser.json({ limit: '50mb' }));
    this._server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this._server.use(cors());
  }

  private setControllers() {
    const userController = new UserController();
    this._server.use('/api/users', userController.router);
  }
}
