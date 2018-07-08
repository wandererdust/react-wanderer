import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "./Slide.css";

const Slide = ({ name }) => (
  <section className="slide">
    Slide {name}. Go to <Link to="/love">Love</Link>
  </section>
);

class Carousel extends Component {
  slides = [
    { name: "who" },
    { name: "what" },
    { name: "love" },
    { name: "when" }
  ];
  home = this.slides[0] && this.slides[0].name;

  get slideIndex() {
    return this.slides.findIndex(s => s.name === this.props.match.params.slide);
  }

  get slideNumber() {
    return this.slideIndex + 1;
  }

  get nextSlide() {
    return this.slides[this.slideIndex + 1];
  }

  get prevSlide() {
    return this.slides[this.slideIndex - 1];
  }

  render = () =>
    this.slideNumber ? (
      <main className={`carousel s${this.slideNumber}`}>
        {this.prevSlide && (
          <Link className="prev" to={`/${this.prevSlide.name}`}>
            PREV
          </Link>
        )}
        {this.nextSlide && (
          <Link className="next" to={`/${this.nextSlide.name}`}>
            NEXT
          </Link>
        )}
        {this.slides.map(s => <Slide key={s.name} name={s.name} />)}
      </main>
    ) : (
      <Redirect to={`/${this.home}`} />
    );
}

export default Carousel;
