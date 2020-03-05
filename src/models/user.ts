export class UserModel {
  id!: string;
  nickname!: string;
}

export class UserMeModel {
  id!: string;
  nickname!: string;
  email!: string;
  isEmailConfirmed!: boolean;
  registeredDate!: Date;
}
