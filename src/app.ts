import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDb } from "./config";
import { eventsRouter, teamsRouter, productsRouter } from "./routers";

const app = express();
app
	.use(cors())
	.get("/status", (req, res) => res.send("Tudo rodando liso!!!"))
	.use("/events", eventsRouter)
	.use("/teams", teamsRouter)
	.use("/store", productsRouter);

export function init(): Promise<Express> {
	connectDb();
	return Promise.resolve(app);
}

export async function close(): Promise<void> {
	await disconnectDb();
}

export default app;
