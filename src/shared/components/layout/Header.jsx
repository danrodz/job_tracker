import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Row } from 'react-materialize';

// We created a component with a simple arrow function.
const Header = props => {
  const { url = 'http://localhost:3000' } = props;

  return (
    <Row className="row App-header">
      <a href={url}>
        <img src="https://huntr.co/images/huntr_logo_white.png" alt="logo" />
      </a>

      <Navbar right>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/signup">Signup</Link>
        </NavItem>
        <NavItem>
          <Link to="/notes">Notes</Link>
        </NavItem>
        <NavItem>
          <Link to="/todo">Todo</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
        <NavItem>
          <div
            onClick={() => {
              localStorage.clear();
              this.props.history.push('/login');
            }}
          >
            Signout

         </div>

        </NavItem>
      </Navbar>
    </Row>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;