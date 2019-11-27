import React, { useState } from 'react'
import styled from 'styled-components'

import SignIn from './SignIn'
import SignUp from './SignUp'

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => {
  const [action, setAction] = useState('signIn')

  return (
    <>
      <Wrapper>{action === 'signIn' ? <SignIn /> : <SignUp />}</Wrapper>
    </>
  )
}
