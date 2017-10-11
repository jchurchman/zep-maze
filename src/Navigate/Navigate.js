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
    background-color: #226764;
    display: inline-block;
    list-style-type: none;
    margin: 8px 20px;
    border: 4px outset #D0AC4C;
    border-radius: 35px;
    a {
        padding: 3vw;
        color: #D0AC4C;
    }
`

const NavLink = props => <Link style={{ color: '#D0AC4C', textDecoration: 'none' }} {...props}/>;

export default function Navigate() {
    return (
        <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
            {/* <NavItem><NavLink to="/about">About</NavLink></NavItem> */}
            {/* <NavItem><NavLink to="/instructions">Instructions</NavLink></NavItem> */}
            <NavItem><NavLink to="/player">Play</NavLink></NavItem>
            {/* <NavItem><NavLink to="/build">Build</NavLink></NavItem> */}
        </NavList>
    );
}