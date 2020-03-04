import { Exclude, Expose } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

@Exclude()
export class User {
  @Expose({ groups: CT_GROUPS.QUERY })
  id!: string;

  @Expose({ groups: CT_GROUPS.QUERY })
  nickname!: string;
}