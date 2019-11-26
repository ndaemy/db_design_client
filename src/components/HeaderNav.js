import React from 'react'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from 'carbon-components-react/lib/components/UIShell'

const HeaderNav = () => (
  <div className="container">
    <Header aria-label="DD Management">
      <HeaderName href="/" prefix="DD">
        Management
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
)

export default HeaderNav
