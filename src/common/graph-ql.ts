export interface IGraphQlError {
  fields: string[];
  message: string;
}

export interface IResult<T> {
  data: T | undefined;
  error: IGraphQlError | undefined;
  loading: boolean;
}
