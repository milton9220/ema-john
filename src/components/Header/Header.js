import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/shop"
                            style={({ isActive }) => ({
                                background: isActive ? "yellow" : "",
                                fontWeight: isActive ? "bold" : "normal",
                                color: isActive ? "black" : "white",
                            })}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/review"
                            style={({ isActive }) => ({
                                background: isActive ? "yellow" : "",
                                fontWeight: isActive ? "bold" : "normal",
                                color: isActive ? "black" : "white",
                            })}
                        >
                            Order Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/manage"
                            style={({ isActive }) => ({
                                background: isActive ? "yellow" : "",
                                fontWeight: isActive ? "bold" : "normal",
                                color: isActive ? "black" : "white",
                            })}
                        >
                            Manage Inventory
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
