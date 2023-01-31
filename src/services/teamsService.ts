import { notFoundError } from "@/errors/notFoundError";
import teamsRepository from "@/repositories/teamsRepository";

async function getTeams() {
	const teams = await teamsRepository.findTeams();
	if (!teams) {
		throw notFoundError();
	}
	return teams;
}

async function getTeamsCategories() {
	const teamsCategories = await teamsRepository.findTeamsCategories();
	if (!teamsCategories) {
		throw notFoundError();
	}
	return teamsCategories;
}

const teamsService = {
	getTeams,
	getTeamsCategories,
};

export default teamsService;
