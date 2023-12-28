import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { type KeyboardEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { userConfigs } from '../../configs/userConfigs';

interface Props {
  toggleColorMode: () => void;
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

export function Topbar(props: Props) {
  const theme = useTheme();

  return (
    <AppBar
      color="inherit"
      position="fixed"
    >
      <Toolbar>
        <IconButton
          className="mr-[0.65rem]"
          color="inherit"
          edge="start"
          onClick={props.toggleDrawer(true)}
          size="large"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          fontWeight="bold"
          to="/"
          variant="h6"
        >{userConfigs.name
            .toUpperCase()
            .split('')
            .join(' ')}</Typography>
        <div className="grow" />
        <Tooltip title={`Toggle ${theme.palette.mode === 'dark'
          ? 'Dark'
          : 'Light'} Mode`}>
          <IconButton
            color="inherit"
            onClick={props.toggleColorMode}
            size="large"
          >
            {theme.palette.mode === 'dark'
              ? <DarkModeIcon />
              : <LightModeIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="View GitHub Repository">
          <IconButton
            color="inherit"
            edge="end"
            href={`${userConfigs.socials.github}Website`}
            rel="noreferrer"
            size="large"
            target="_blank"
          >
            <FontAwesomeIcon
              fontSize="24px"
              icon={faGithub}
            />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
