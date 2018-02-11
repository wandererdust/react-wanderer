import React from "react";
import "./Carrousel.scss";
import slidesData from "../../slidersData";
import Slide from "../Slide/Slide";

class Carrousel extends React.Component {
    slides = slidesData;
    render() {
        const withStyle = { width: 100 * this.slides.length + "vw" };
        return (
            <main className="carrousel" style={withStyle}>
                {this.slides.map(data => <Slide data={data} />)}
            </main>
        );
    }
}

export default Carrousel;
