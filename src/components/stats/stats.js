import React from 'react';
import './stats.css'

const Stats = (props) => {
    const {votes} = props;
    return (
        <div className="stats-item">
            <h4>Rating:</h4>
            <span>{votes}</span>
            <span className="fa fa-star"></span>
        </div>
    );
}

export default Stats;