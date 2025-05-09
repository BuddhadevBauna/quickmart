import express from "express";
import addFeildToCollection from "../controllers/dynamic/addFeildToCollection.js";
import verifyReqiredToken from "../middlewares/verifyReqiredToken-middleware.js";
import getUserRole from "../middlewares/getUserRole-middleware.js";
import checkAdmin from "../middlewares/checkAdmin-middleware.js";
import deleteFeildFromCollection from "../controllers/dynamic/deleteFieldFromCollection.js";

const router = express.Router();

//admin controll
router.route('/add').patch(verifyReqiredToken, getUserRole, checkAdmin, addFeildToCollection);
router.route('/delete').patch(verifyReqiredToken, getUserRole, checkAdmin, deleteFeildFromCollection);

export default router;