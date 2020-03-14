import { Exclude, Expose } from 'class-transformer';
import { UserModel } from './user';
import { ProjectModel } from './project';

export class InviteModel {
  id!: string;
  invitedByUser!: Partial<UserModel>;
  project!: Partial<ProjectModel>;
  invitedUser?: Partial<UserModel>;
}

@Exclude()
export class InviteMutationModel {
  @Expose()
  invitedUserEmail!: String;
}
