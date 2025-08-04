import { PartialType } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  s: any 
  a: any; 
  b: any; 
  c: any; 
  d: any 
  e: any; 
  f: any; 
  g: any;
}
