import { Type, Transform, Expose, Exclude } from 'class-transformer';
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

@Exclude()
export class ConversationMutationModel {
  @Expose()
  text!: string;
}
