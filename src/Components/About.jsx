import pf from "../Images/pf.png";

const About = () => {
  return (
    <>
      <div className="container" id="intro">
        <h1>About</h1>
        <div className="container">
          <h5 className="card-title">How did this all start?</h5>
          <p className="card-text">LOREM IPSUM</p>
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/An-Be/react-non-traditionals-blog"
          >
            View source code
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Meet the creator</div>
        <h5 className="card-title">Andrea Berrocal</h5>
        <img
          className="card-img-top"
          id="profileImage"
          src={pf}
          alt="Andrea Berrocal"
        />
        <p className="card-text">LOREM IPSUM</p>
      </div>
    </>
  );
}

export default About;
