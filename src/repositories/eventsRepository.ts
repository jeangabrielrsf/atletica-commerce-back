import { prisma } from "@/config";

async function findEvents() {
	return prisma.events.findMany();
}

const eventsRepository = {
	findEvents,
};

export default eventsRepository;
