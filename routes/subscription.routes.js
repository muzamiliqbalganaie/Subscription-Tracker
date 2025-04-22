import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: "Subscription data retrieved successfully" }));

subscriptionRouter.post('/', (req, res) => res.send({ title: "Subscription created successfully" }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: "Subscription updated successfully" }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: "Subscription deleted successfully" }));

subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: "Subscription data retrieved by ID successfully" }));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: "cancel subscription" }));

subscriptionRouter.get('/upcomming-renewals', (req, res) => res.send({ title: "upcomming-renewals" }));

export default subscriptionRouter;
