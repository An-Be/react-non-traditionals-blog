function Footer() {
  return (
    <footer className="site-footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/An-Be"
            >
              <i className="fa fa-github" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/andrea-berrocal-/"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
