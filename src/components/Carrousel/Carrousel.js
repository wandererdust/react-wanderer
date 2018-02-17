import React from "react";
import "./Carrousel.scss";
import Slide from "../Slide/Slide";
import slidesHelper from "../../data/slides/helper";
import Hammer from "react-hammerjs";

class Carrousel extends React.Component {
    slidesCount = slidesHelper.slides.length;

    componentWillMount() {
        console.log(
            "*********************************** WILL MOUNT! ***********************************"
        );
    }

    get path() {
        return this.props.location.pathname;
    }

    get prevPath() {
        return slidesHelper.getPreviousPath(this.path);
    }

    get nextPath() {
        return slidesHelper.getNextPath(this.path);
    }

    get step() {
        return slidesHelper.getStepFromPath(this.path);
    }

    get getLeftStyle() {
        if (this.pannedOffset) {
            return this.pannedOffset + "px";
        }
        return `-${this.step}00vw`;
    }

    isNotAllowedMove(deltaX) {
        return (
            (this.step === 0 && deltaX > 0) ||
            (this.step === this.slidesCount - 1 && deltaX < 0)
        );
    }

    getWindowPannedPercentage(deltaX) {
        return Math.abs(100 * deltaX / window.innerWidth);
    }

    handlePanStart = e => {
        this.initialOffset = e.target.parentElement.offsetLeft;
    };

    handlePan = e => {
        if (this.isNotAllowedMove(e.deltaX)) {
            return;
        }
        if (e.isFinal) {
            this.pannedOffset = null;
            const percentage = this.getWindowPannedPercentage(e.deltaX);
            if (percentage > 25) {
                this.goTo(e.deltaX < 0 ? this.nextPath : this.prevPath);
                return;
            }
            this.forceUpdate();
            return;
        }
        this.pannedOffset = this.initialOffset + e.deltaX;
        this.forceUpdate();
    };

    handlePrevStep = () => {
        this.goTo(this.prevPath);
    };

    handleNextStep = () => {
        this.goTo(this.nextPath);
    };

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        console.log(
            "*********************************** RENDER! ***********************************"
        );
        const style = {
            width: `${this.slidesCount}00vw`,
            left: this.getLeftStyle
        };
        if (!this.pannedOffset) {
            style.transition = "left 400ms cubic-bezier(0.4, 0, 0, 1)";
        }

        return (
            <Hammer onPan={this.handlePan} onPanStart={this.handlePanStart}>
                <main className="carrousel" style={style}>
                    {slidesHelper.slides.map(data => (
                        <Slide
                            key={data.id}
                            data={data}
                            next={this.handleNextStep}
                            prev={this.handlePrevStep}
                        />
                    ))}
                </main>
            </Hammer>
        );
    }
}

export default Carrousel;
