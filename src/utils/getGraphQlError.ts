import { ApolloError } from 'apollo-boost';

interface IError {
  statusCode: number;
  error: string;
  message: string;
}

export function getGraphQlError(error: ApolloError | undefined) {
  if (error && error?.graphQLErrors[0]) {
    return (error.graphQLErrors[0].message as unknown) as IError;
  }

  return undefined;
}
