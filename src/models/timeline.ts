import { Type, Transform } from 'class-transformer';
import { getTimestampWithZoneOffset } from '../utils/getTimestampWithZoneOffset';

export class TimelineModel {
  id!: string;

  @Type(() => String)
  eventName!: string;

  @Type(() => Date)
  @Transform(value => getTimestampWithZoneOffset(value))
  date!: Date;
}
