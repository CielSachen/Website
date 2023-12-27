import './ErrorLayout.css';

import ErrorIcon from '@mui/icons-material/Error';
import { Button, Typography } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';

export function ErrorElement() {
  type RouteError =
  & Response
  & Error
  & { error: Error };

  const error = useRouteError() as RouteError;

  console.error(error);

  return (
    <div className="page-content">
      <div className="error-main">
        <div className="mb-10 scale-[6]">
          <ErrorIcon color="primary" />
        </div>
        <Typography
          fontWeight="bold"
          variant="h3"
        >{error.status || 'Whoops!'}</Typography>
        <Typography
          variant="h4"
        >{error.statusText || 'Something went wrong :('}</Typography>
        <div className="error-main-message-container">
          <pre className="text-black">{error.message || error.error.message}</pre>
        </div>
        {error.status === 404
          ? <Button
            component={Link}
            to="/"
            variant="contained"
          >RETURN TO HOMEPAGE</Button>
          : null}
      </div>
    </div>
  );
}
