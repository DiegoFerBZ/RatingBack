// src/types/express.d.ts
import { Request } from 'express';
import { UserShortRequest } from '../controllers/user/dtos/userShortRequest';

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserShortRequest;
  }
}

