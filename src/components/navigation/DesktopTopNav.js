import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Menu,
  Container
} from 'semantic-ui-react';

const styles = {
  link: {
    color: '#ffc400'
  }
};

const DesktopTopNav = ({
  showFixedMenu,
  hideFixedMenu,
  fixed,
  location: { pathname }
}) => (
  <Menu
    fixed={fixed ? 'top' : null}
    pointing={!fixed}
    secondary={!fixed}
    size="large"
    style={{
      background: '#c60b1e'
    }}
  >
    <Container>
      <Menu.Item active={pathname === '/'}>
        <NavLink style={styles.link} to="/">
          Hem
        </NavLink>
      </Menu.Item>
      <Menu.Item active={pathname === '/products'}>
        <NavLink style={styles.link} to="/products">
          Produkter
        </NavLink>
      </Menu.Item>
      <Menu.Item active={pathname === '/about'}>
        <NavLink style={styles.link} to="/about">
          Om
        </NavLink>
      </Menu.Item>
      <Menu.Item active={pathname === '/contact'}>
        <NavLink style={styles.link} to="/contact">
          Kontakt
        </NavLink>
      </Menu.Item>
    </Container>
  </Menu>
);

export default withRouter(DesktopTopNav);
