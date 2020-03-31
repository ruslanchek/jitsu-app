import { ApolloError, ExecutionResult } from 'apollo-boost';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

interface IGraphQlError {
  fields: string[];
  message: string;
}

interface IResult<T> {
  data: T | undefined;
  error: IGraphQlError | undefined;
}

export function useGraphQLResult<T>(transformClass: ClassType<T> | undefined = undefined, container: string = '') {
  return async (query: Promise<ExecutionResult> | ApolloError | undefined): Promise<IResult<T>> => {
    let result: any;
    try {
      result = await query;
    } catch (e) {
      result = e;
    }
    if (result?.data && result.data[container]) {
      return {
        data: transformClass ? plainToClass(transformClass, result?.data[container]) : result?.data[container],
        error: undefined,
      };
    } else if (result?.graphQLErrors) {
      return {
        data: undefined,
        error: {
          fields: (result.graphQLErrors[0] as any).fields,
          message: (result.graphQLErrors[0] as any).message,
        },
      };
    } else {
      return {
        data: undefined,
        error: undefined,
      };
    }
  };
}
