import teamsRepository from "@/repositories/teamsRepository";

async function getTeams() {
	const teams = await teamsRepository.findTeams();

	return teams;
}

const teamsService = {
	getTeams,
};

export default teamsService;
