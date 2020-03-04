import { Exclude, Expose, Type, Transform } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';
import { User } from './user';
import { getTimestampWithZoneOffset } from '../utils/getTimestampWithZoneOffset';

@Exclude()
export class Conversation {
  @Expose({ groups: CT_GROUPS.QUERY })
  id!: string;

  @Expose({ groups: CT_GROUPS.ALL })
  text!: string;

  @Type(() => User)
  @Expose({ groups: CT_GROUPS.QUERY })
  user!: User;

  @Type(() => Date)
  @Expose({ groups: CT_GROUPS.QUERY })
  @Transform(value => getTimestampWithZoneOffset(value))
  date!: Date;
}
