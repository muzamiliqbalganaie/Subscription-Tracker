import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';


const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests  
app.use(cookieParser()); // Parse cookies from the request headers
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);



app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker Application!');
});

app.listen(PORT, async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

    await connectToDatabase()
});

export default app;