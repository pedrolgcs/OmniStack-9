import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => res.json({ message: "Enjoy the silence!" }));

export default routes;
