import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { KeyboardEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { appRoutes } from '../../routes';

interface Props {
  state: boolean;
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

export function Sidebar(props: Props) {
  const appState = useAppSelector((state) => state.appState.value);

  return (
    <Drawer
      anchor="left"
      classes={{ paper: 'w-[18.75rem] shrink-0 bg-red-900 bg-none' }}
      onClose={props.toggleDrawer(false)}
      open={props.state}
      transitionDuration={600}
    >
      <div className="
        flex h-[64px] items-center justify-end px-2 py-0 text-white
        sm:h-[56px] sm:landscape:h-[48px]
      "
      >
        <IconButton
          className="hover:bg-[rgba(0,0,0,0.08)]"
          color="inherit"
          edge="start"
          onClick={props.toggleDrawer(false)}
          size="large"
        >
          <MenuOpenIcon />
        </IconButton>
      </div>
      <Divider className="bg-[rgba(255,255,255,0.3)]" />
      <List>
        {appRoutes.map((appRoute, index) => (
          appRoute.sidebarProps && appRoute.path
            ? (
              <div key={index}>
                {appRoute.sidebarProps.separated
                  ? <Divider className="my-[0.6rem] bg-[rgba(255,255,255,0.3)]" />
                  : null}
                <div onClick={props.toggleDrawer(false)}>
                  <ListItemButton
                    classes={{ selected: 'bg-[rgba(0,0,0,0.16)]' }}
                    className="px-6 py-3 text-white hover:bg-[rgba(0,0,0,0.08)]"
                    component={Link}
                    selected={appState === appRoute.state}
                    to={appRoute.path}
                  >
                    <ListItemIcon className="text-inherit">{appRoute.sidebarProps.icon}</ListItemIcon>
                    <ListItemText primary={appRoute.sidebarProps.displayText}
                    />
                  </ListItemButton>
                </div>
              </div>
            )
            : null
        ))}
      </List>
    </Drawer>
  );
}
