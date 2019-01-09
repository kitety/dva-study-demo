import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CounterPage from './routes/CounterPage';
import UserPage from './routes/UserPage';

function RouterConfig (props) {
  // 凡是不知道的参数就可以打印一次
  console.log(props)
  const { history } = props
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={CounterPage} />
        <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
