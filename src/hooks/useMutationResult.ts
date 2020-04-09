import { ApolloError, ExecutionResult } from 'apollo-boost';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { IResult } from '../common/graph-ql';

export function useMutationResult<T>(transformClass: ClassType<T> | undefined = undefined, container: string = '') {
  return async (mutation: Promise<ExecutionResult> | ApolloError | undefined): Promise<IResult<T>> => {
    let result: any;
    try {
      result = await mutation;
    } catch (e) {
      result = e;
    }
    if (result?.data && result.data[container]) {
      return {
        data: transformClass ? plainToClass(transformClass, result?.data[container]) : result?.data[container],
        error: undefined,
        loading: false,
      };
    } else if (result?.graphQLErrors) {
      return {
        data: undefined,
        error: {
          fields: (result.graphQLErrors[0] as any).fields,
          message: (result.graphQLErrors[0] as any).message,
        },
        loading: false,
      };
    } else {
      return {
        data: undefined,
        error: undefined,
        loading: false,
      };
    }
  };
}
