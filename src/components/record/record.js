import React from 'react';

const rToUpCase = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
const Record = ({ item, field, label, sign}) => {
    if(!item[field]||!item[field].length) return null;
        return (
            <li>
              <h4 className="term">{label}: </h4>
              <span className="field">{ item[field]}{sign}</span>
            </li>
        )
};
const Recordf = ({ item, field, label, name }) => {
    if(!item[field]||!item[field].length) return null;
    return (
    <li>
        <h4 className="term">{label}: </h4>
        <span className="field">
        {item[field].map((k) => {
            return <span key={k[name]}>{rToUpCase(k[name])}</span>;
        })}
        </span>
    </li>
    );
};
export {Record, Recordf}