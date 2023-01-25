import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDb } from "./config";

const app = express();
app.use(cors());

export function init(): Promise<Express> {
	connectDb();
	return Promise.resolve(app);
}

export async function close(): Promise<void> {
	await disconnectDb();
}

export default app;
