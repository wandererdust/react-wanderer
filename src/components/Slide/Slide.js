import React from 'react';
import './Slide.scss';

function Slide({ data }) {
    const colorStyle = { backgroundColor: data.color };
    return (
        <article className="slide" style={colorStyle}>
            <h1>{data.name}</h1>
        </article>
    );
}

export default Slide;
