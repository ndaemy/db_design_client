import React, { Component } from 'react'

import EmployeeList from './components/EmployeeList'

class App extends Component {
  state = {
    employees: '',
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ employees: res }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/employees')
    const body = await response.json()
    return body
  }

  render() {
    return <EmployeeList employeeList={this.state.employees} />
  }
}

export default App
