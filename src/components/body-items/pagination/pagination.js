import React from 'react';
import './pagination.css';

const Pagination = ({onChangePage, pages}) => {
   
    let createPage = (pages) => {
        let nodeList = [];
        nodeList.push(React.createElement("button",{id:"cur_b", key:1, onClick:onChangePage, className:"btn btn-outline-danger act-ive"}, 1));
        for(let i = 2; i < pages+1; i++){
            nodeList.push(React.createElement("button",{id:"cur_b", key:i, onClick:onChangePage, className:"btn btn-outline-danger"}, i));
        }
        return nodeList;
    }

    if(pages < 2){ return null}
        return (
            <div className="pagination row justify-content-center">
                <div className="btn-group btn-group-toggle">
                    <button id="prev_b" onClick={onChangePage} className="btn btn-outline-danger">&laquo;</button>
                        {
                        createPage(pages)
                        }
                    <button id="next_b" onClick={onChangePage} className="btn btn-outline-danger">&raquo;</button>
                </div>
            </div>
        );
}

export default Pagination;