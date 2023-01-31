import { getTeams } from "@/controllers/teamsController";
import { Router } from "express";

const teamsRouter = Router();

teamsRouter.get("/", getTeams);

export { teamsRouter };
