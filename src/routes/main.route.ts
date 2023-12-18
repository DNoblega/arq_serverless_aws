import { Router } from 'express';
import { mainController } from '../controllers/main.controller';
import { validateDB } from 'src/dataBase/connection';

const router = Router();

router.get("/", mainController);

export default router;