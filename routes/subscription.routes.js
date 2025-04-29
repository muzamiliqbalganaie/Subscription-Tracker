import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: "Subscription data retrieved successfully" }));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: "Subscription updated successfully" }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: "Subscription deleted successfully" }));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: "cancel subscription" }));

subscriptionRouter.get('/upcomming-renewals', (req, res) => res.send({ title: "upcomming-renewals" }));

export default subscriptionRouter;
