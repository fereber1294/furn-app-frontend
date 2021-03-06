//Imports
import Landing from './components/Landing'
// import Nav from './components/Nav'
import Dashboard from './components/items/Dashboard'
import CreateItem from './components/items/CreateItem'

import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from './context/authentication/AuthState'
import ItemsState from './context/items/ItemsState'

import './App.css';
// import ItemsContext from './context/items/ItemsContext'

function App() {
  return (
    <>
      <ItemsState>

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
              <Route 
                path="/dashboard"
                component={Dashboard}
                exact
              />              
              <Route 
                path="/dashboard/createItem"
                component={CreateItem}
                exact
              />
            </Switch>
          </Router>
        </AuthState>

      </ItemsState>
    </>
  );
}

export default App;
