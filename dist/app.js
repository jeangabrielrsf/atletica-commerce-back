import express from "express";
import cors from "cors";
import { connectDb, disconnectDb } from "config/database";
const app = express();
app.use(cors());
export function init() {
    connectDb();
    return Promise.resolve(app);
}
export async function close() {
    await disconnectDb();
}
export default app;
