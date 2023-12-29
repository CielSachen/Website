import './App.css';

import {
  createTheme,
  CssBaseline,
  type PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { createContext, useMemo, useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { ErrorElement, MainLayout } from './components/layout';
import { appRoutes, createRouteObjects } from './routes';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = createContext({ toggleColorMode: () => {} });
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;

export function App() {
  const [mode, setMode] = useState<PaletteMode>(useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light');
  const colorMode = useMemo(() => ({ toggleColorMode: () => {
    setMode((prevMode) => (prevMode === 'light'
      ? 'dark'
      : 'light'));
  } }), []);
  const theme = useMemo(() => createTheme({
    components: {
      MuiPopover: { defaultProps: { container: rootElement } },
      MuiPopper: { defaultProps: { container: rootElement } },
      MuiDialog: { defaultProps: { container: rootElement } },
      MuiModal: { defaultProps: { container: rootElement } },
    },
    palette: {
      primary: red,
      mode,
    },
  }), [mode]);
  const router = createHashRouter([{
    path: '/',
    element: <MainLayout colorModeContext={ColorModeContext} />,
    errorElement: <ErrorElement />,
    children: createRouteObjects(appRoutes),
  }]);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}
