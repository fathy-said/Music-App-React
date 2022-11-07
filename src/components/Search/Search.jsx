import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";
const Search = () => {
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
        </div>
    );
};

export default Search;
