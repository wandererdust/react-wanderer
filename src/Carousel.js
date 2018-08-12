import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./Carousel.css";
import Slide from "./Slide";
import model from "./Model";
import Hammer from "react-hammerjs";

class Carousel extends Component {
  slides = model;
  home = this.slides[0] && this.slides[0].name;
  state = { panOffset: 0 };
  panPercentageBreak = 25;

  get slideIndex() {
    return this.slides.findIndex(s => s.name === this.props.match.params.slide);
  }

  get slideNumber() {
    return this.slideIndex + 1;
  }

  get nextSlide() {
    return this.slides[this.slideIndex + 1];
  }

  get nextSlideLink() {
    return `/${this.nextSlide.name}`;
  }

  get prevSlide() {
    return this.slides[this.slideIndex - 1];
  }

  get prevSlideLink() {
    return `/${this.prevSlide.name}`;
  }

  get style() {
    return {
      left: this.state.panOffset
        ? `${this.initialOffset + this.state.panOffset}px`
        : `-${this.slideIndex}00vw`
    };
  }

  getPanPercentage = deltaX => Math.abs((100 * deltaX) / window.innerWidth);

  letPan = deltaX =>
    !(deltaX < 0 && this.slideNumber === this.slides.length) &&
    !(deltaX > 0 && this.slideIndex === 0);

  handlePan = e =>
    this.letPan(e.deltaX) && this.setState({ panOffset: e.deltaX });

  handlePanStart = e =>
    this.letPan(e.deltaX) &&
    (this.initialOffset = e.target.parentElement.offsetLeft);

  handlePanEnd = e =>
    this.letPan(e.deltaX) &&
    this.setState({ panOffset: 0 }, () => this.evaluateSlideMovement(e.deltaX));

  evaluateSlideMovement = deltaX =>
    this.getPanPercentage(deltaX) > this.panPercentageBreak &&
    this.historyPushOnPanEnd(deltaX);

  historyPushOnPanEnd = deltaX =>
    this.props.history.push(
      deltaX < 0 ? this.nextSlideLink : this.prevSlideLink
    );

  render = () =>
    this.slideNumber ? (
      <Hammer
        onPan={this.handlePan}
        onPanStart={this.handlePanStart}
        onPanEnd={this.handlePanEnd}
      >
        <main className={`carousel s${this.slideNumber}`} style={this.style}>
          {this.prevSlide && (
            <Link className="prev" to={this.prevSlideLink}>
              PREV
            </Link>
          )}
          {this.nextSlide && (
            <Link className="next" to={this.nextSlideLink}>
              NEXT
            </Link>
          )}
          {this.slides.map(s => (
            <Slide key={s.name}>
              {s.template}
            </Slide>
          ))}
        </main>
      </Hammer>
    ) : (
      <Redirect to={`/${this.home}`} />
    );
}

export default Carousel;
