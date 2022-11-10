import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";
import { TbMenu2 } from "react-icons/tb";
import { useContext } from "react";
import { IdContext } from "../../constants/ContextMusicApi";
const Search = () => {
    let { changeContextSearch } = useContext(IdContext);
    let headerActive = (e) => {
        document.querySelector('.header').classList.add("active")

    }


    let searchWord = (e) => {
        changeContextSearch(e)

    }

    return (
        <div className="box-search">
            <form action="" onSubmit={(e) => {
                e.preventDefault()

            }}>
                <div>
                    <input type="text" placeholder="Search" onChange={(e) => {

                        searchWord(e.target.value.length ? e.target.value[0].toUpperCase() + e.target.value.substring(1) : undefined)


                    }} />
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
