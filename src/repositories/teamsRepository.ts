import { prisma } from "@/config";

async function findTeams() {
	return prisma.teams.findMany();
}

const teamsRepository = {
	findTeams,
};

export default teamsRepository;
