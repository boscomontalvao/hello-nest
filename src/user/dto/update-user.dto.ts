import { PartialType } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  a: any;
  b: any
  c: any;
  d: any
  f: any;
  e: any;
  g: any
}
