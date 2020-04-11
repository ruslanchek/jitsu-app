import { QueryResult } from '@apollo/react-common';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { IResult } from '../common/graph-ql';
import { ApolloError } from 'apollo-boost';

export function useQueryResult<T>(transformClass: ClassType<T> | undefined = undefined, container: string = '') {
  return function <O = T>(result: QueryResult): IResult<O> {
    if (result.loading) {
      return {
        data: undefined,
        error: undefined,
        loading: true,
      };
    } else {
      if (result?.data && result.data[container]) {
        return {
          data: transformClass ? plainToClass(transformClass, result?.data[container]) : result?.data[container],
          error: undefined,
          loading: false,
        };
      } else if (result?.error?.graphQLErrors) {
        return {
          data: undefined,
          error: {
            fields: (result.error.graphQLErrors[0] as any).fields,
            message: (result.error.graphQLErrors[0] as any).message,
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
    }
  };
}
