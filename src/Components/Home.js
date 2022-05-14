import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import register from "../Images/register.png";
import getStarted from "../Images/getStarted.png";

function Home() {
  return (
    <>
      <div className="container" id="intro">
        <div className="row">
          <div className="col-md">
            <h1>Welcome to Non-Traditionals Blog &#128075;</h1>
            <p>
              This is a community for those who are either already in tech or
              planning to change careers in tech can share their experience and
              progress.
            </p>
          </div>
        </div>
      </div>
      <div id="getStarted">
        <div className="container">
          <div className="row">
            <div className="col-md col-6" id="getStartedText">
              <p>
                To get the best experience at Non-traditionals making an account
                is recommended but if you are just here to browse blogs all you
                have to do is click on Blogs at the top of the page.
              </p>
            </div>
            <div className="col-md col-2">
              <img
                src={getStarted}
                width="250"
                alt="logo for getting started"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md m-1">
            <Card className="Card">
              <CardImg className="CardImg" src={register} width="100"></CardImg>
              <CardBody>
                <CardTitle>Register and make a profile</CardTitle>
                <CardText>LOREM IPSUM</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
