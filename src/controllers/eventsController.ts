import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getEvents(req: Request, res: Response) {
	try {
	} catch (error) {
		return res.status(httpStatus.NOT_FOUND).send(error);
	}
}
