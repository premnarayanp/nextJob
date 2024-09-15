import { documentController } from '../controllers/documentController.js';

const documentRouter = new Hono();

documentRouter.post('/', documentController.createDocument);
documentRouter.put('/:id', documentController.editDocument);
documentRouter.get('/:id', documentController.getDocument);
documentRouter.delete('/:id', documentController.deleteDocument);

export { documentRouter };
