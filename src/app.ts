import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

export class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.setConfig();
  }

  private setConfig() {
    this.server.use(bodyParser.json({ limit: '50mb' }));
    this.server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.server.use(cors());
  }
}
