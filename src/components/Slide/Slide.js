import React from 'react';
import { withRouter } from 'react-router-dom'
import './Slide.scss';

function Slide({ data, history }) {
    const colorStyle = { backgroundColor: data.color };
    return (
        <article className="slide" style={colorStyle}>
            <h1>{data.name}</h1>
            <button onClick={() => { history.push('/love'); }}>Love!</button>
        </article>
    );
}

export default withRouter(Slide);
