import { Exclude, Expose } from 'class-transformer';

export class ProjectModel {
  id!: string;
  name!: string;
  avatar!: string;
}

@Exclude()
export class ProjectMutationModel {
  @Expose()
  name!: string;
}
