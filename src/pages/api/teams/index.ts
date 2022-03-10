import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const teams = [
    { id: 1, name: 'Bayern' },
    { id: 2, name: 'Real Madrid' },
    { id: 3, name: 'Chelsea' },
    { id: 4, name: 'Flamengo' },
  ];

  return res.json(teams);
};
