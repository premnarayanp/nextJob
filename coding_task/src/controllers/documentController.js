import { documentService } from '../services/documentService.js';

export const documentController = {
    createDocument: async (c) => {
        const data = await c.req.json();
        const newDoc = await documentService.createDocument(data);
        return c.json(newDoc);
    },
};
