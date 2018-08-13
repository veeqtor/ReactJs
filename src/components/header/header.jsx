import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Responsive,
  Container,
} from 'semantic-ui-react';


const PageHeader = () => (
  <div>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <Menu
        fixed="top"
        pointing
        secondary
        size="small"
      >
        <Container>
          <Menu.Item active>Home</Menu.Item>
          <Menu.Item as="a" to="/login">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item position="right">
            <Link className="ui button basic grey" to="/login">Login</Link>
            <Link className="ui button basic grey" to="/signUp" style={{ marginLeft: '0.5rem' }}>Sign up</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </Responsive>
  </div>
);


export default PageHeader;
