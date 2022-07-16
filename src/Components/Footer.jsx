const Footer = () => {
  return (
    <div className='footerContainer'>
      <footer className='sitefooter'>
          <h5>Socials</h5>
          <div>
          <a
            className="btn btn-social-icon btn-github"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/An-Be"
          >
            <i className="fa fa-github" />
          </a>{" "}
          <a
            className="btn btn-social-icon btn-linkedin"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/andrea-berrocal-/"
          >
            <i className="fa fa-linkedin" />
          </a>{" "}
          </div>
      </footer>
    </div>
  );
}
export default Footer;

