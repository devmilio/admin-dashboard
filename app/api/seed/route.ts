import { db, products } from 'lib/db';

export const dynamic = 'force-dynamic';

export async function GET(){
     await db.insert(products).values([
    {
      id: 1,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
      name: 'Fred Again GA',
      status: 'active',
      price: '139.00',
      stock: 150,
      availableAt: new Date()
    },
    {
      id: 2,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
      name: 'Martin Guy VIP',
      status: 'active',
      price: '29.00',
      stock: 50,
      availableAt: new Date()
    },
    {
      id: 3,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
      name: 'Cultura Profetica',
      status: 'active',
      price: '29.00',
      stock: 70,
      availableAt: new Date()
    }
  ]); 
  return Response.json({
    message: 'Uncomment to seed data after DB is set up.'
  });
}
