import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className="header  col-md-2   d-lg-block row">
            <div className="box col-md-2 ">
                <div className="logo">
                    <a href="#">MUSICPLAY</a>
                </div>
                <div className="box-link">
                    <NavLink to={"/"}>
                        <FaHome />
                        <span>Discover</span>
                    </NavLink>
                    <NavLink to={"/yourCountry"}>
                        <HiOutlinePhotograph />
                        <span>Your Country</span>
                    </NavLink>
                    <NavLink to={"/artists"}>
                        <IoPeopleOutline />
                        <span>top artists</span>
                    </NavLink>
                    <NavLink to={"/charts"}>
                        #<span>top charts</span>
                    </NavLink>
                </div>
                <span className="close-menu" onClick={() => {
                    document.querySelector('.header').classList.remove("active")

                }}>*</span>
            </div>
        </div>
    );
};
export default Header;
