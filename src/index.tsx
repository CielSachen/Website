import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './app/store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

function fallbackComponent(props: FallbackProps) {
  return (
    <>
      <p>Something went wrong:</p>
      <pre>{(props.error as Error).message}</pre>
    </>
  );
}

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={fallbackComponent}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
