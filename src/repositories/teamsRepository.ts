import { prisma } from "@/config";

async function findTeams() {
	return prisma.teams.findMany();
}

async function findTeamsCategories() {
	return prisma.teamsCategories.findMany();
}

const teamsRepository = {
	findTeams,
	findTeamsCategories,
};

export default teamsRepository;
