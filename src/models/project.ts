import { Document } from './document';
import { Exclude, Expose, Type } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

@Exclude()
export class Project {
  @Expose({ groups: CT_GROUPS.QUERY })
  id!: string;

  @Expose({ groups: CT_GROUPS.ALL })
  name!: string;

  @Expose({ groups: CT_GROUPS.QUERY })
  @Type(() => Document)
  documents?: Document[];
}
