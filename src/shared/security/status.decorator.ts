import { SetMetadata } from '@nestjs/common';
import { UserStatus } from 'src/commun/enums/status.enum';

export const STATUS_KEY = 'status';
export const Status = (...status: UserStatus[]) =>
  SetMetadata(STATUS_KEY, status);
