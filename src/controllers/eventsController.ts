import eventsService from "@/services/eventsService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getEvents(req: Request, res: Response) {
	try {
		const events = await eventsService.getEvents();
		return res.status(httpStatus.OK).send(events);
	} catch (error) {
		return res.status(httpStatus.NOT_FOUND).send(error);
	}
}
