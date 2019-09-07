import React from 'react';
import { NavLink } from "react-router-dom";
import {
  MdClearAll,
  //   MdExitToApp,
  //   MdHelp,
  //   MdInsertChart,
  //   MdMessage,
  //   MdNotificationsActive,
  //   MdNotificationsNone,
  //   MdPersonPin,
  //   MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  // ListGroup,
  // ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';
import Headroom from 'react-headroom';
import Axios from 'axios';

const bem = bn.create('header');


class Header extends React.Component {

  state = {
    isAuth: false,
    username: ''
  };

  getUserName() {
    Axios.get('api/user/profile')
    .then (res => {
        this.setState ({ isAuth: true })
        const {username, email, _id} = res.data.user
        this.setState ( { username, email, _id })
    })
    .catch(console.log('Unauthenticated'))
  }

  componentDidMount() {
    // isAuth();
    this.getUserName();
 
};

componentWillUnmount() {
  this.getUserName();
};



  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {

    return (
      <Headroom disableInlineStyles>
        <Navbar light expand className={bem.b('bg-white')}>
          <Nav navbar className="mr-2">
            <Button outline size="sm" onClick={this.handleSidebarControlButton}>
              <MdClearAll size={25} />
            </Button>
          </Nav>

          <Nav navbar className={bem.e('nav-right')}>
            <NavItem className="d-inline-flex">
              <BSNavLink
                className="position-relative"
                tag={NavLink}
                to={`/logout`}
              >
                 <span className="userId">{`${this.state.username} |`} <span><strong>Log Out</strong></span></span>
                
              </BSNavLink>
            </NavItem>
          </Nav>

          {/* <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light">
                <UserCard
                  title="Jane"
                  subtitle="jane@jane.com"
                  text="Last updated 3 mins ago"
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdPersonPin /> Profile
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdInsertChart /> Stats
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdMessage /> Messages
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdSettingsApplications /> Settings
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp /> Help
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdExitToApp /> Signout
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav> */}
        </Navbar>
      </Headroom>

    );
  }
}

export default Header;
