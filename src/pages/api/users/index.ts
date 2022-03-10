import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Vini' },
    { id: 2, name: 'Renatha' },
    { id: 3, name: 'Matue' },
    { id: 4, name: 'Teto' },
  ];

  return res.json(users);
};
