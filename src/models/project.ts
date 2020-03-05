import { Exclude, Expose } from 'class-transformer';

export class ProjectModel {
  id!: string;
  name!: string;
}

@Exclude()
export class ProjectMutationModel {
  @Expose()
  name!: string;
}
