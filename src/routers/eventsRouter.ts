import { getEvents } from "@/controllers/eventsController";
import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get("/", getEvents);

export { eventsRouter };
