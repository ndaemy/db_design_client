import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Auth from '../routes/Auth/Auth'
import Dashboard from '../routes/Dashboard'

// if logged in
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Dashboard} />
  </>
)

// if not logged in
const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
)

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
)

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default AppRouter
