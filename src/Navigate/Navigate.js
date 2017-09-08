import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const NavItem = styled.li`
    display: inline-block;
    list-style-type: none;
    margin: 10px 20px;
`

const NavLink = props => <Link style={{ color: 'orange', textDecoration: 'none' }} {...props}/>;

export function Navigate() {
    return (
        <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
            <NavItem><NavLink to="/about">About</NavLink></NavItem>
            <NavItem><NavLink to="/instructions">Instructions</NavLink></NavItem>
            <NavItem><NavLink to="/play">Play</NavLink></NavItem>
            {/* <NavItem><NavLink to="/build">Build</NavLink></NavItem> */}
        </NavList>
    );
}