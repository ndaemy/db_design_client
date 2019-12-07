import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Auth from '../routes/Auth'
import Dashboard from '../routes/Dashboard'
import Employee from '../routes/Employee'
import EmployeeDev from '../routes/EmployeeDev'
import NewEmployee from '../routes/NewEmployee'
import Project from '../routes/Project'
import NewProject from '../routes/NewProject'
import ProjectDetail from '../routes/ProjectDetail'
import TeamMembers from '../routes/ProjectDetail/TeamMembers'
import NewTeamMembers from '../routes/ProjectDetail/TeamMembers/NewTeamMember'
import Client from '../routes/Client'
import NewClient from '../routes/NewClient'

// if logged in
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/employees" component={Employee} />
    <Route exact path="/employees/dev" component={EmployeeDev} />
    <Route exact path="/employees/new" component={NewEmployee} />
    <Route exact path="/projects" component={Project} />
    <Route exact path="/projects/new" component={NewProject} />
    <Route exact path="/projects/detail/:proj_no" component={ProjectDetail} />
    <Route
      exact
      path="/projects/detail/:proj_no/team_members"
      component={TeamMembers}
    />
    <Route
      exact
      path="/projects/detail/:proj_no/team_members/new"
      component={NewTeamMembers}
    />
    <Route exact path="/clients" component={Client} />
    <Route exact path="/clients/new" component={NewClient} />
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
