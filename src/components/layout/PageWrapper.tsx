import { type ReactNode, useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { setAppState } from '../../features/appState/appStateSlice';

interface Props {
  state?: string,
  children: ReactNode;
}

export function PageWrapper(props: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.state) dispatch(setAppState(props.state));
  }, [dispatch, props]);

  return (
    <>{props.children}</>
  );
}
