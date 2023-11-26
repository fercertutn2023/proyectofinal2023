
import React from 'react';
import './NovedadItem.css';

const NovedadItem = (props) => {
    const { compania, titulo, desarrollo, imagen, body } = props;
    return (
        <div className="novedades">            
            <h2>{compania}</h2>
            <h3>{titulo}</h3>
            <h4>{desarrollo}</h4>
            <img src={imagen} alt="imagen"/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
export default NovedadItem;
