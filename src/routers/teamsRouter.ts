import { getTeams, getTeamsCategories } from "@/controllers/teamsController";
import { Router } from "express";

const teamsRouter = Router();

teamsRouter.get("/", getTeams);
teamsRouter.get("/categories", getTeamsCategories);

export { teamsRouter };
