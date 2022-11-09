import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";
import { TbMenu2 } from "react-icons/tb";

const Search = () => {
    let headerActive = (e) => {
        document.querySelector('.header').classList.add("active")

    }
    return (
        <div className="box-search">
            <form action="">
                <div>
                    <input type="text" placeholder="Search" />
                    <span>
                        <AiOutlineSearch />
                    </span>
                </div>
            </form>
            <span className="menu" onClick={(e) => {
                headerActive(e)

            }}>
                <TbMenu2 onClick={(e) => {
                    headerActive(e)

                }} />
            </span>
        </div>
    );
};

export default Search;
