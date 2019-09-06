import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";
import {
    // UncontrolledTooltip,
    // Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

import sidebarBgImage from '../../assets/img/sidebar/sidebar.jpg';

const sidebarBackground = {
    backgroundImage: `url(${sidebarBgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const bem = bn.create('sidebar');

export default props => {
    const userId = localStorage.getItem('p3aajjkw-id')

    return (
        <aside className={bem.b()} data-image={sidebarBgImage}>
            <div className={bem.e('background')} style={sidebarBackground} />
            <div className={bem.e('content')}>
                <Navbar>
                    <NavItem className="navbar-brand d-flex mx-auto mt-2">
                        <span className="text-white">
                            Canna-Keeper 
                        </span>
                    </NavItem>
                </Navbar>
                <Nav vertical>
                    <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/home`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">Dashboard</span>
                        </BSNavLink>
                    </NavItem>
                    <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/newseason`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">New Season</span>
                        </BSNavLink>
                    </NavItem>
                    <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/seasons`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">Seasons</span>
                        </BSNavLink>
                    </NavItem>
                    {/* <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/dailylogs`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">Daily Logs</span>
                        </BSNavLink>
                    </NavItem> */}
                    <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/images`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">Images</span>
                        </BSNavLink>
                    </NavItem>
                    <NavItem className={bem.e('nav-item')}>
                        <BSNavLink
                            className="text-uppercase"
                            tag={NavLink}
                            to={`/dailylog`}
                            activeclassname="active"
                        // exact={exact}
                        >
                            <span className="">New Log</span>
                        </BSNavLink>
                    </NavItem>
                </Nav>
            </div>
        </aside>




        // <Menu>
        //     <Link to={`/home`}>Dashboard</Link>
        //     <Link to={`/newseason`}>New Season</Link>
        //     <Link to={`/seasons`}>Seasons</Link>
        //     <Link to={`/dailylogs`}>Daily Logs</Link>
        //     <Link to={`/images`}>Images</Link>
        //     <Link to={`/dailylog`}>New Log</Link>
        // </Menu>
    );
};