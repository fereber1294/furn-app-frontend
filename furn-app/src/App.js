//Imports
import Landing from './components/Landing'
import Nav from './components/Nav'
import Dashboard from './components/items/Dashboard'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from './context/authentication/AuthState'
// import ItemsState from './context/items/ItemsState'

import './App.css';

function App() {
  return (
    <>

        <AuthState>
          <Router>
            <Switch>
              <Route 
                path="/"
                component={Landing}
                exact
              />
              <Route 
                path= "/sign-up"
                component={SignUp}
                exact
              />
              <Route 
                path="/log-in"
                component={Login}
                exact
              />

              
            </Switch>
          </Router>
        </AuthState>
    </>
  );
}

export default App;
