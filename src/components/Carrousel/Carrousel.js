import React from "react";
import slidesData from "../../slidersData";

class Carrousel extends React.Component {

    render() {
        return (
            <main>
                <h1>Hello I'm a Carrousel</h1>
                {slidesData.map(slide => <p>{slide.name}</p>)}
            </main>
        );
    }
}

export default Carrousel;
