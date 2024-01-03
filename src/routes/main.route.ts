import { Router } from 'express';
import { MainController} from '../controllers/main.controller';
import { validateDB } from 'src/dataBase/connection';

const router = Router();
const mainController = new MainController();

router.get("/", mainController.helloword);

export default router;