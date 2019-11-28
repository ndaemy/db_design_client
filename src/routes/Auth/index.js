import React, { useState } from 'react'
import styled from 'styled-components'
import { ContentSwitcher, Switch } from 'carbon-components-react'

import SignIn from './SignIn'
import SignUp from './SignUp'

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default () => {
  const [action, setAction] = useState('signIn')
  const actionToggle = () => {
    action === 'signIn' ? setAction('signUp') : setAction('signIn')
  }

  return (
    <>
      <Wrapper>
        <ContentSwitcher
          style={{ width: '30vw', minWidth: '200px', marginBottom: '2vh' }}
          onChange={actionToggle}
        >
          <Switch text="Sign In" />
          <Switch text="Sign Up" />
        </ContentSwitcher>
        {action === 'signIn' ? <SignIn /> : <SignUp />}
      </Wrapper>
    </>
  )
}
