import React from 'react';
import { withRouter } from 'react-router-dom'
import './Slide.scss';

function Slide({ data, prev, next, history }) {
    return (
        <article className="slide">
            <h1>{data.name}</h1>
            <button onClick={() => { history.push('/love'); }}>Love!</button>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </article>
    );
}

export default withRouter(Slide);
