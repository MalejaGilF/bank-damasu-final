import { Response, Request } from 'express';
import { User } from '../models/user.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = (req: Request, res: Response, next: any) => {
  const { name, lastName, email, department, city, phone } = req.body;
  try {
    const user = User.create({
      name,
      lastName,
      email,
      department,
      city,
      phone,
    });
    return res.status(200).send(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(error);
  }
};

export const createUser = create;
