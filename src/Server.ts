import express from "express";
import cors from "cors";
import { initializeDatabase } from "./dataBase/db";
import { validateDB } from "./dataBase/connection";
import mainRoute  from "./routes/main.route";


class Server {
  public app: express.Application;
  private path = {
    main:"/"
  };
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(validateDB);
  }

  private routes() {
    this.app.use(this.path.main, mainRoute);
  }

  async connectionDB() {
    await initializeDatabase();
  }
}

export default Server;
