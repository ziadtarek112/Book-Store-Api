import express from "express";
import { register } from "./Controller/userController";
const app = express();
app.use(express.json());
app.post('/api/user/register',)
export default app;

