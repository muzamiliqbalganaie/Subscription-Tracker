import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: "User data retrieved successfully" }));

userRouter.get('/:id', (req, res) => res.send({ title: "User data retrieved by ID successfully" }));

userRouter.post('/', (req, res) => res.send({ title: "User data created successfully" }));

userRouter.put('/:id', (req, res) => res.send({ title: "User data updated successfully" }));

userRouter.delete('/:id', (req, res) => res.send({ title: "User data deleted successfully" }));

export default userRouter;
// This code defines a set of routes for user-related operations in an Express application.