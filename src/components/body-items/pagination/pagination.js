import React from 'react';
import './pagination.css';

const Pagination = ({totalPages, setNewPage, currPage}) => {
    let showPages = 5;

    const onChangePage = (target, page) => {
        if(currPage === page) return null;
        if(target === "prev_page"&&currPage-1 > 0){ page = currPage - 1}
        else if(target === "next_page"&&currPage < totalPages){ page = currPage + 1}
        else if(target !== "btn") return null;
        setNewPage(page);
    }

    let createPages = () => {return ([...new Array(showPages)].map((_, i) => {
        let page;
        if(1 + i > totalPages) return null;
        else if(totalPages < 5){ page = 1 + i; }
        else if(currPage + i === i + 1){ page = currPage + i; }
        else if(currPage - 1 === 1){ page = 1 + i; }
        else{ page = currPage - 2 + i; }
        return <button onClick={()=>{onChangePage("btn", page)}} key={i} className={`btn btn-outline-danger ${page===currPage?"active":' '}`}>{page}</button>;
    }))};
    
    if(totalPages < 2){ return null; }
        return (
            <div className="pagination row justify-content-center">
                <div className="btn-group btn-group-toggle">
                    <button id="prev_b" onClick={()=>{onChangePage("prev_page")}} className="btn btn-outline-danger">&laquo;</button>
                        {
                            createPages()
                        }
                    <button id="next_b" onClick={()=>{onChangePage("next_page")}} className="btn btn-outline-danger">&raquo;</button>
                </div>
            </div>
        );
}

export default Pagination;