import express from "express";
import cors from "cors";
import { initializeDatabase } from "./dataBase/db";
import { validateDB } from "./dataBase/connection";
import mainRoute  from "./routes/main.route";
import { seguimientoMiddleware } from "./security/seguimiento";


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
    this.app.use(seguimientoMiddleware);
    this.app.use(validateDB);
  }

  private routes() {
    this.app.use(this.path.main, mainRoute);
    this.app.get('*', async function(req, res){
      throw new Error("404 Not Found")
    });
  }

  async connectionDB() {
    await initializeDatabase();
  }
}

export default Server;
