import { Exclude, Expose } from 'class-transformer';
import { ImageModel } from './image';

export class ProjectModel {
  id!: string;
  name!: string;
  avatar!: ImageModel[];
}

@Exclude()
export class ProjectMutationModel {
  @Expose()
  name!: string;
}
