import { notFoundError } from "@/errors/notFoundError";
import teamsRepository from "@/repositories/teamsRepository";

async function getTeams() {
	const teams = await teamsRepository.findTeams();
	if (!teams) {
		throw notFoundError();
	}
	return teams;
}

const teamsService = {
	getTeams,
};

export default teamsService;
