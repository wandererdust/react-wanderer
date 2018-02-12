import React from "react";
import "./Carrousel.scss";
import slidesData from "../../slidesData";
import Slide from "../Slide/Slide";

class Carrousel extends React.Component {
    slides = slidesData;

    getStepFromPath() {
        return slidesData.findIndex(
            slide => slide.path === this.props.location.pathname
        );
    }

    render() {
        const l = this.slides.length;
        const s = this.getStepFromPath();
        const style = {
            width: `${l}00vw`,
            left: `-${s}00vw`
        };
        return (
            <main className="carrousel" style={style}>
                {this.slides.map(data => <Slide data={data} />)}
            </main>
        );
    }
}

export default Carrousel;
