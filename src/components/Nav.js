import React from 'react'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell'

const Nav = ({ active, subActive }) => {
  const dashboardProps = {
    isActive: active === 'Dashboard',
  }

  const employeesProps = {
    isActive: active === 'Employees',
  }

  const employeesAllProps = {
    'aria-current': subActive === 'All' ? 'page' : '',
  }

  const employeesDevProps = {
    'aria-current': subActive === 'Dev' ? 'page' : '',
  }

  const projectsProps = {
    isActive: active === 'Projects',
  }

  const clientsProps = {
    isActive: active === 'Clients',
  }

  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="DD Management">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="/" prefix="DD">
                Management
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  <SideNavLink href="/" {...dashboardProps}>
                    Dashboard
                  </SideNavLink>
                  <SideNavMenu title="Employees" {...employeesProps}>
                    <SideNavMenuItem href="/employees" {...employeesAllProps}>
                      All
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      href="/employees/dev"
                      {...employeesDevProps}
                    >
                      Developers
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink href="/projects" {...projectsProps}>
                    Projects
                  </SideNavLink>
                  <SideNavLink href="/clients" {...clientsProps}>
                    Clients
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
    </div>
  )
}

export default Nav
