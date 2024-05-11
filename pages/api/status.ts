import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { URL } from 'url';

// Scheduled task to check the status of websites every 1 minute
const checkWebsiteStatus = async () => {
  const websites = process.env.WEBSITES ? process.env.WEBSITES.split(',') : [];
  const statuses = await Promise.all(
    websites.map(async (website) => {
      try {
        const response = await fetch(new URL(website));
        return { website, status: response.status };
      } catch (error) {
        return { website, status: 'Error', error: error.message };
      }
    })
  );
  return statuses;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const statuses = await checkWebsiteStatus();
    res.status(200).json({ statuses });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
