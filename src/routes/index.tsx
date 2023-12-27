import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import type { ReactNode } from 'react';
import { Outlet, type RouteObject } from 'react-router-dom';

import { PageWrapper } from '../components/layout';
import { AboutPage } from './about/AboutPage';
import { AboutSchoolsPage } from './about/AboutSchoolsPage';
import { HomePage } from './home/HomePage';
import { ProjectsPage } from './projects/ProjectsPage';

interface BaseAppRoute {
  index?: boolean;
  path?: `/${string}`;
  element: ReactNode;
  state?: string;
  children?: Omit<BaseAppRoute, 'children'>[];
}

interface AppRoute extends BaseAppRoute {
  state: string;
  sidebarProps?: {
    displayText: string;
    icon: ReactNode;
    separated?: boolean;
  };
}

export const appRoutes: AppRoute[] = [
  {
    index: true,
    element: <HomePage title="Manacchi | Personal Website" />,
    state: 'home',
  },
  {
    path: '/',
    element: <HomePage title="Manacchi | Personal Website" />,
    state: 'home',
    sidebarProps: {
      displayText: 'Home',
      icon: <HomeOutlinedIcon />,
    },
  },
  {
    path: '/about',
    element: <Outlet />,
    state: 'about',
    sidebarProps: {
      displayText: 'About Me',
      icon: <AccountBoxOutlinedIcon />,
    },
    children: [{
      index: true,
      element: <AboutPage title="Manacchi | About Me" />,
    }, {
      path: '/about/schools',
      element: <AboutSchoolsPage title="Manacchi | About Me: Schools" />,
    }],
  },
  {
    path: '/projects',
    element: <ProjectsPage title="Manacchi | My Projects" />,
    state: 'projects',
    sidebarProps: {
      displayText: 'My Projects',
      icon: <CodeOutlinedIcon />,
      separated: true,
    },
  },
];

export function createRouteObjects(routes: BaseAppRoute[], state?: string): RouteObject[] {
  return routes.map((route) => route.index
    ? ({
      index: route.index,
      element: <PageWrapper state={route.state ?? state}>{route.element}</PageWrapper>,
    })
    : ({
      path: route.path,
      element: <PageWrapper state={route.state ?? state}>{route.element}</PageWrapper>,
      children: route.children
        ? createRouteObjects(route.children, route.state)
        : undefined,
    }));
}
