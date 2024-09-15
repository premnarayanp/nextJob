
import { requireAuth } from '@clerk/clerk-sdk-node';

// Clerk Middleware to verify user tokens
export const clerkMiddleware = async (c, next) => {
    try {
        const sessionToken = c.req.headers.get('Authorization')?.replace('Bearer ', '');

        if (!sessionToken) {
            return c.json({ error: 'Authorization header is missing.' }, 401);
        }

        const session = await requireAuth(sessionToken);

        // Attach the session/user information to the request for further use
        c.req.locals = { user: session.user };
        await next();
    } catch (error) {
        return c.json({ error: 'Unauthorized access', details: error.message }, 401);
    }
};
