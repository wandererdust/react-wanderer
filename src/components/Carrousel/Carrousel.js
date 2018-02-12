import React from "react";
import "./Carrousel.scss";
import Slide from "../Slide/Slide";
import slidesHelper from "../../data/slides/helper";

class Carrousel extends React.Component {
    get path() {
        return this.props.location.pathname;
    }

    handlePrevStep = () => {
        const prevPath = slidesHelper.getPreviousPath(this.path);
        this.goTo(prevPath);
    }

    handleNextStep = () => {
        const nextPath = slidesHelper.getNextPath(this.path);
        this.goTo(nextPath);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const l = slidesHelper.slides.length;
        const s = slidesHelper.getStepFromPath(this.path);
        const style = {
            width: `${l}00vw`,
            left: `-${s}00vw`
        };
        return (
            <main className="carrousel" style={style}>
                {slidesHelper.slides.map(data => (
                    <Slide
                        data={data}
                        next={this.handleNextStep}
                        prev={this.handlePrevStep}
                    />
                ))}
            </main>
        );
    }
}

export default Carrousel;
