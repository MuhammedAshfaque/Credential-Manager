import express from "express";
import authCredential from "../middlewares/authCredential.js";
import { addCredential, getCredentials, deleteCredential } from "../controllers/credentialController.js";


const credentialRouter = express.Router();

credentialRouter.post("/", authCredential, addCredential);
credentialRouter.get("/", authCredential, getCredentials);
credentialRouter.delete("/:id", authCredential, deleteCredential);

export default credentialRouter;
