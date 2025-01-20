import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const { name, birthDate, gender } = req.body;

    const baby = await prisma.baby.create({
      data: {
        name,
        birthDate: new Date(birthDate),
        gender,
        parentId: session.user.id
      }
    });

    res.status(201).json(baby);
  } catch (error) {
    console.error('Error adding baby:', error);
    res.status(500).json({ message: 'Error adding baby' });
  }
}