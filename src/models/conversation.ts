import { Type, Transform } from 'class-transformer';
import { UserModel } from './user';
import { getTimestampWithZoneOffset } from '../utils/getTimestampWithZoneOffset';

export class ConversationModel {
  id!: string;
  text!: string;

  @Type(() => UserModel)
  user!: UserModel;

  @Type(() => Date)
  @Transform(value => getTimestampWithZoneOffset(value))
  date!: Date;
}

export class ConversationMutationModel {
  text!: string;
}
