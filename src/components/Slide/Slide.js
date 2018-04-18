import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Slide.scss";

function Slide({ data, prev, next, history }) {
    return (
        <article className="slide">
            <h1>{data.name}</h1>
            {data.body}
            <Link to="/love">Love!</Link>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </article>
    );
}

export default withRouter(Slide);
