import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 5 }); // Deduct 5 tokens from the bucket
        // console.log("Arcjet Decision:", decision);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit())
                return res.status(429).json({ error: "Too Many Requests" });
            if (decision.reason.isBot())
                return res.status(403).json({ error: "No bots allowed" });
            return res.status(403).json({ error: "Forbidden Access Denied" });
        }

        next();
    } catch (error) {
        console.error("Arcjet middleware error:", error);
        next(error);
    }
};

export default arcjetMiddleware;