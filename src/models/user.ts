import { Exclude, Expose } from 'class-transformer';

export class UserModel {
  id!: string;
  nickname!: string;
}

@Exclude()
export class UserMeModel {
  @Expose()
  id!: string;

  @Expose()
  nickname!: string;

  @Expose()
  email!: string;

  @Expose()
  isEmailConfirmed!: boolean;

  @Expose()
  registeredDate!: Date;
}
