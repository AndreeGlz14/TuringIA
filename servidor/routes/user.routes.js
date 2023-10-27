import { logout, login, register, verifyToken } from "../controllers/user.controller.js";
import { Router } from 'express';
import { SchemaValidate } from "../middlewares/validate.schemas.js";
import { userLoginValidateData, userRegisterValidateData } from "../schemas/userValidate.schema.js";


const router = Router();


router.post('/register',SchemaValidate(userRegisterValidateData),register);
router.post('/login',SchemaValidate(userLoginValidateData),login);
router.post('/logout',logout)

router.get('verifyToken', verifyToken);
export default router;