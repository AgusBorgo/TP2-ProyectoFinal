import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).send("get all users/");
});

userRouter.get("/:id", (req, res) => {
    res.status(200).send("get user by id/");
});

userRouter.post("/:id", (req, res) => {
    res.status(200).send("post user by id/");
});

userRouter.put("/:id", (req, res) => {
    res.status(200).send("put all users by id/");
});

export default userRouter;
