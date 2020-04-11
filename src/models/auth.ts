import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AuthModel {
  @Expose()
  token!: string;
}

export class CheckAuthModel {
  result!: boolean;
}

@Exclude()
export class LoginMutationModel {
  @Expose()
  email!: string;

  @Expose()
  password!: string;
}

@Exclude()
export class RegisterMutationModel {
  @Expose()
  email!: string;

  @Expose()
  password!: string;
}