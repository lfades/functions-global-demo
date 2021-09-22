import { counter } from '@lib/counter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  counter.count++;
  res.send({ count: counter.count });
}
