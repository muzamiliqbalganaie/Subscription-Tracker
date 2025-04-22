import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";


const authRouter = Router();

//Path: /api/v1/auth/sign-up
//Method: POST
authRouter.post('/sign-up', signUp);
//Path: /api/v1/auth/sign-in
//Method: POST
authRouter.post('/sign-in', signIn);
//Path: /api/v1/auth/sign-out
//Method: POST
authRouter.post('/sign-out', signOut);

export default authRouter;
// authRouter.post('/sign-up', (req, res) => res.send({ title: "User signed up successfully" }));

// authRouter.post('/sign-in', (req, res) => res.send({ title: "User signed in successfully" }));

// authRouter.post('/sign-out', (req, res) => res.send({ title: "User signed out successfully" }));

// authRouter.post('/refresh-token', (req, res) => res.send({ title: "Token refreshed successfully" }));

// authRouter.post('/forgot-password', (req, res) => res.send({ title: "Password reset link sent" }));

// authRouter.post('/reset-password', (req, res) => res.send({ title: "Password reset successfully" }));

// authRouter.post('/verify-email', (req, res) => res.send({ title: "Email verified successfully" }));

// authRouter.post('/verify-phone', (req, res) => res.send({ title: "Phone number verified successfully" }));

// authRouter.post('/verify-otp', (req, res) => res.send({ title: "OTP verified successfully" }));

// authRouter.post('/resend-otp', (req, res) => res.send({ title: "OTP resent successfully" }));

// authRouter.post('/update-profile', (req, res) => res.send({ title: "Profile updated successfully" }));

// authRouter.post('/change-password', (req, res) => res.send({ title: "Password changed successfully" }));

// authRouter.post('/delete-account', (req, res) => res.send({ title: "Account deleted successfully" }));

// authRouter.post('/get-user', (req, res) => res.send({ title: "User data retrieved successfully" }));

// authRouter.post('/get-user-by-id', (req, res) => res.send({ title: "User data retrieved by ID successfully" }));

// authRouter.post('/get-user-by-email', (req, res) => res.send({ title: "User data retrieved by email successfully" }));

// authRouter.post('/get-user-by-phone', (req, res) => res.send({ title: "User data retrieved by phone number successfully" }));

// This code defines a set of routes for authentication-related operations in an Express application. Each route is associated with a specific HTTP method and endpoint, and they all send a JSON response indicating the success of the operation. The routes include sign-up, sign-in, sign-out, token refresh, password reset, email verification, phone verification, OTP verification, OTP resend, profile update, password change, account deletion, and user data retrieval by various criteria.