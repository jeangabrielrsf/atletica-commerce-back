import teamsService from "@/services/teamsService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTeams(req: Request, res: Response) {
	try {
		const teams = await teamsService.getTeams();
		return res.status(httpStatus.OK).send(teams);
	} catch (error) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}
}
