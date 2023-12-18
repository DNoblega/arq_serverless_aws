import { Request, Response, NextFunction } from "express";
import { AppDataSource, initializeDatabase } from "./db";

const validateDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if(!AppDataSource.isInitialized){
        await initializeDatabase()
      }
    next();
};

export { validateDB };
