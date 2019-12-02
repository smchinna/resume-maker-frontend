import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

const store = configureStore();
const history = createBrowserHistory();

const SignIn = lazy(() => import('./container/SignIn'));
const Signup = lazy(() => import('./container/SignUp'));
const Resume = lazy(() => import('./container/Resume'));
const Draggable = lazy(() => import('./container/DragAndDrop'));

const commonSuspenseFunc = (SuspenseCom) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SuspenseCom />
    </Suspense>
  )
}

class App extends React.Component {
  render() { 
    return (
      <div className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route 
                path="/drag"
                component={() => commonSuspenseFunc(Draggable)}
              />
              <Route 
                exact path="/"
                component={() => <Redirect to="/login"/>}
              />
              <Route
                path="/login"
                component={() => commonSuspenseFunc(SignIn)}
              />
              <Route
                path="/register"
                component={() => commonSuspenseFunc(Signup)}
              />
              <Route
                path="/resume"
                component={() => commonSuspenseFunc(Resume)}
              />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
