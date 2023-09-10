import express from "express";


const app = express();
app.use(express.json());
app.post('api/user/register')
export default app;