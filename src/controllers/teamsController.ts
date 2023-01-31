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

export async function getTeamsCategories(req: Request, res: Response) {
	try {
		const teamsCategories = await teamsService.getTeamsCategories();
		return res.status(httpStatus.OK).send(teamsCategories);
	} catch (error) {
		return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
	}
}
