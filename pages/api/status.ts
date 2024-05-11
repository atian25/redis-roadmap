import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// Type definition for the response data
type StatusCheckResponse = {
  url: string;
  status: number;
  responseTime: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusCheckResponse[]>
) {
  const urls = ['https://example.com', 'https://another-example.com'];
  const results: StatusCheckResponse[] = [];

  for (const url of urls) {
    const startTime = Date.now();
    try {
      const response = await fetch(url);
      const endTime = Date.now();
      results.push({
        url,
        status: response.status,
        responseTime: endTime - startTime,
      });
    } catch (error) {
      const endTime = Date.now();
      results.push({
        url,
        status: 0, // Indicating a network or fetching error
        responseTime: endTime - startTime,
      });
    }
  }

  res.status(200).json(results);
}
