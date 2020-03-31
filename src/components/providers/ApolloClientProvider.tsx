import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, concat } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';
import { ENV } from '../../common/env';

const httpLink = createUploadLink({
  uri: ENV.GRAPH_API_URL,
});

const wsLink = new WebSocketLink({
  uri: ENV.GRAPH_API_WS_URL,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache(),
});

export const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
