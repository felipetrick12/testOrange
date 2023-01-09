import type { NextApiRequest, NextApiResponse } from 'next';
import { DataResponse, ResponseError } from '../../interfaces';
import data from '../../data.json';

export default function (
  req: NextApiRequest,
  res: NextApiResponse<DataResponse | ResponseError>,
) {
  switch (req.method) {
    case 'GET':
      return getInfo(res);

    default:
      return res.status(400).json({
        message: 'there is not method',
      });
  }
}

export const getInfo = async (
  res: NextApiResponse<DataResponse | ResponseError>,
) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: 'something went wrong, check server console',
    });
  }
};
