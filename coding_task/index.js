import { Hono } from 'hono';
import { serve } from 'hono/cloudflare-workers';
import { websocketHandler } from './websockets/socketHandler.js';
import { PrismaClient } from '@prisma/client';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import { documentRouter } from './src/routes/document.js'
//import { clerkMiddleware } from './src/middleware/cleark-auth-middleware.js';

const app = new Hono();
const prisma = new PrismaClient();

//app.use('*', clerkMiddleware);  // Apply middleware to all routes

//app.use('*', ClerkExpressWithAuth());
app.use(ClerkExpressWithAuth());

app.get('/', (c) => c.text('Hello, Serverless World!'));

app.route('/documents', documentRouter);

// WebSocket handler
app.get('/ws', websocketHandler);

serve(app); // Deploy using Cloudflare Workers.
//app.fire();  // Start the Hono app