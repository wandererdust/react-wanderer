import React from "react";
import { Link } from "react-router-dom";
import "./Slide.css";

const Slide = ({ name }) => (
  <section className="slide">
    Slide {name}. Go to <Link to="/love">Love</Link>
  </section>
);

export default Slide;
