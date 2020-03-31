import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AuthModel {
  @Expose()
  token!: string;
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