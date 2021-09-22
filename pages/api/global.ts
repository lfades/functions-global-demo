import { globalCounter } from '@lib/counter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  globalCounter.count++;
  res.send({ count: globalCounter.count });
}
