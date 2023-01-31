import { notFoundError } from "@/errors/notFoundError";
import eventsRepository from "@/repositories/eventsRepository";

async function getEvents() {
	const events = await eventsRepository.findEvents();
	if (!events) {
		throw notFoundError();
	}
	return events;
}

const eventsService = {
	getEvents,
};

export default eventsService;
