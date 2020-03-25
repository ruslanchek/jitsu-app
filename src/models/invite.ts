import { Exclude, Expose } from 'class-transformer';
import { UserModel } from './user';
import { ProjectModel } from './project';

export class InviteModel {
  id!: string;
  active!: boolean;
  date!: Date;
  project!: Partial<ProjectModel>;
  invitedByUser!: Partial<UserModel>;
  invitedUser?: Partial<UserModel>;
}

@Exclude()
export class InviteMutationModel {
  @Expose()
  invitedUserEmail!: String;
}
