import { Toolbar } from '@mui/material';
import type { Context, KeyboardEvent, MouseEvent } from 'react';
import { useContext, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Sidebar, Topbar } from '../common';

interface Props {
  colorModeContext: Context<{
    toggleColorMode: () => void;
  }>;
}

export function MainLayout(props: Props) {
  const colorMode = useContext(props.colorModeContext);
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) return;

    setState(open);
  };

  return (
    <>
      <ScrollRestoration />
      <div className="flex">
        <Topbar
          toggleColorMode={colorMode.toggleColorMode}
          toggleDrawer={toggleDrawer}
        />
        <nav className="shrink-0">
          <Sidebar
            state={state}
            toggleDrawer={toggleDrawer}
          />
        </nav>
        <main className="min-h-[100vh] w-full grow">
          <Toolbar />
          <Outlet />
        </main>
      </div>
    </>
  );
}
