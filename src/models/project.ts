import { Document } from './document';
import { Exclude, Expose } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

@Exclude()
export class Project {
  @Expose({ groups: CT_GROUPS.QUERY })
  id!: string;

  @Expose({ groups: CT_GROUPS.ALL })
  name!: string;

  @Expose({ groups: CT_GROUPS.QUERY })
  documents?: Document[];
}
