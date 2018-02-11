import React from "react";
import "./Carrousel.scss";
import slidesData from "../../slidersData";

class Carrousel extends React.Component {

    render() {
        return (
            <main className="carrousel">
                <h1>Hello I'm a Carrousel</h1>
                {slidesData.map(slide => <p>{slide.name}</p>)}
            </main>
        );
    }
}

export default Carrousel;
