import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { institution, name, email, size, message } = req.body;

    if (!institution || !name || !email || !size) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Simulate sending an email or processing the request
      console.log('Mail request received:', { institution, name, email, size, message });

      // Respond with success
      return res.status(200).json({ message: 'Mail request processed successfully' });
    } catch (error) {
      console.error('Error processing mail request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}