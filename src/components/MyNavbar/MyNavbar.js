import React from 'react';
import './MyNavbar.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
        <Nav className='ml-auto' >
        <NavItem>
          <NavLink tag={RRNavLink} to='/alphabets' className="navigation btn btn-info">ፊደላት<p>Alphabets</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/numbers' className="navigation btn btn-info">ቁጥሮች<p>Numbers</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/colors' className="navigation btn btn-info">ቀለማት<p>Colors</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/profile' className="navigation btn btn-info">ገፅ<p>Profile</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink onClick={logoutClickEvent} className="navigation logout btn btn-info">ለመዉጣት<p>Logout</p></NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className='ml-auto' navbar />;
    };
    return (
      <div className="my-navbar">
        <div>
          <Navbar expand="md">
            <NavbarBrand href="/home" className="navigation habesha"><h2 className="habesh">ሐበሻ ልጆች</h2></NavbarBrand>
            <NavbarToggler onClick={e => this.toggle(e)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {buildNavbar()}
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MyNavbar;