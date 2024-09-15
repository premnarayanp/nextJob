import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const documentService = {
    createDocument: async (data) => {
        const newDoc = await prisma.document.create({
            data: {
                title: data.title,
                content: data.content,
            },
        });
        return newDoc;
    },
};
