import React from 'react';
import ButtonStyle from "../Button/ButtonStyle";
import {getPageArray} from "../../utils/Page";

function Pagination({totalPage,page,changePage}) {

    const pageArray=getPageArray(totalPage)

    return (
        <div className="col-md-12">
            <div className="d-flex">
                {
                    pageArray.map(val=>(
                        <ButtonStyle onClick={()=>changePage(val)} className={page===val ? "btn btn-primary" : "btn btn-outline-primary"} key={val}>{val}</ButtonStyle>
                    ))
                }
            </div>
        </div>
    );
}

export default Pagination;