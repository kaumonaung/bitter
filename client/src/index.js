import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StylesProvider } from '@material-ui/core';
import { AuthProvider } from './context';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <StylesProvider injectFirst>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  </StylesProvider>,
  document.getElementById('root')
);
