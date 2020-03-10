import { Type, Transform, Expose, Exclude } from 'class-transformer';
import { UserModel } from './user';
import { getTimestampWithZoneOffset } from '../utils/getTimestampWithZoneOffset';

export class TimelineModel {
  id!: string;

  @Type(() => String)
  eventName!: string;

  @Type(() => Date)
  @Transform(value => getTimestampWithZoneOffset(value))
  date!: Date;
}
