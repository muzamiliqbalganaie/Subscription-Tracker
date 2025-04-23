import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers
);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({ title: "User data created successfully" }));

userRouter.put('/:id', (req, res) => res.send({ title: "User data updated successfully" }));

userRouter.delete('/:id', (req, res) => res.send({ title: "User data deleted successfully" }));

export default userRouter;
// This code defines a set of routes for user-related operations in an Express application.