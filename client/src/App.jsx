import {Outlet} from 'react-router-dom';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';

  import { StoreProvider } from './utils/GlobalState';

  const httpLink = createHttpLink({
    uri: '/graphql',
  });