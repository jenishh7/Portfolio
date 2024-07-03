import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jenish</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm Jenish, a passionate full-stack developer with expertise in
            creating dynamic web applications. I excel in both front-end and
            back-end technologies, delivering innovative solutions that drive
            business growth.
          </p>
        </div>
        <NavLink to="/contact">
          <button className="btn btn-primary">Get In Touch</button>
        </NavLink>
      </div>
      <div className="hero--section--img">
        <img src="./img/Hero-Section-jenish.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
