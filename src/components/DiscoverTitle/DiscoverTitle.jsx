import React, { useState } from "react";
import "./DiscoverTitle.css";
import { dataOption } from "../../constants/data";
const DiscoverTitle = () => {
    //  get target option value
    const [getOptionValue, setOptionValue] = useState("pop");
    //
    return (
        <div className="discover-title justify-content-center gap-5 gap-md-0 justify-content-md-between flex-column flex-md-row my-5 my-md-0">
            <h1>Discover {getOptionValue}</h1>

            <select
                onChange={(e) => {
                    setOptionValue(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
            >
                {dataOption.length ? (
                    dataOption.map((option) => {
                        return (
                            <option key={option.name} value={option.value}>
                                {option.name}
                            </option>
                        );
                    })
                ) : (
                    <h2>not found data</h2>
                )}
            </select>
        </div>
    );
};

export default DiscoverTitle;
