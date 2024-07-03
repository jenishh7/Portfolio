export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about_me.jpeg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            As a full-stack developers, I'm skilled in both front-end and
            back-end technologies, ensuring seamless web application
            development. Our expertise spans HTML, CSS, JavaScript, and various
            server-side frameworks.
          </p>
          <p className="hero--section-description">
            I excel in building seamless web experiences, leveraging my
            knowledge of React for interactive UI components and Node.js for
            efficient server-side logic. My comprehensive skill set enables me
            to handle the entire development process, ensuring cohesive
            integration and functionality across all layers of a web
            application.
          </p>
        </div>
      </div>
    </section>
  );
}
