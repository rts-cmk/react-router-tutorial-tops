import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{ display: 'flex', gap: '10px' }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/routes-pages">Routes / Pages</NavLink>
            <NavLink to="/UseNavigateInfo">UseNavigateInfo</NavLink>
            <NavLink to="/notfoundpageinfo">404 Page Info</NavLink>
        </nav>
    )
}