import { Router } from "express";
import * as userController from "./user.controller.js";
import { usersValidationRules } from "../Middleware/validation.js";
import { usersupdateValidationRules } from "../Middleware/validation.js";
import { resetPasswordValidationRules1 } from "../Middleware/validation.js";
import loginLimiter from "../Middleware/rateLimit.js";
const router = Router();

router.get("/getusers", userController.getUsers);
router.get("/getusersid/:id", userController.getUserById);
router.post("/postusers", usersValidationRules(),userController.insertUser);
router.post("/login", loginLimiter,userController.loginuser);
router.delete("/deleteusers/:id", userController.deleteUser);
router.patch("/updateusers/:id", usersupdateValidationRules(),userController.updateUserController);
router.post("/forgot-password", userController.forgotPassword);
router.post("/verifyConfirmationCode",userController.verifyConfirmationCode);
router.post("/reset-password",resetPasswordValidationRules1(),userController.resetPassword);
router.get("/getbyuser", userController.getUserByUsername);
router.get("/getbyemail", userController.getUserByEmailController);

export default router;