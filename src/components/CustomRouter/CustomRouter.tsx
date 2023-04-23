import React, { FC, ReactNode, useState, useLayoutEffect } from 'react';

import { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

type Props = {
  history: BrowserHistory;
  children: ReactNode;
};

const CustomRouter: FC<Props> = ({ history, children }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router navigator={history} location={state.location} navigationType={state.action}>
      {children}
    </Router>
  );
};

export default CustomRouter;