import { Router } from "express";

const filmRouter = Router();

filmRouter.get("/", (req, res) => {
    res.status(200).send("get all films/");
});

filmRouter.get("/:id", (req, res) => {
    res.status(200).send("get film by id/");
});

filmRouter.post("/", (req, res) => {
    res.status(200).send("post new film/");
});

filmRouter.put("/:id", (req, res) => {
    res.status(200).send("put film by id/");
});

export default filmRouter;

