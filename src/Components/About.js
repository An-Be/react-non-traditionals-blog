import pf from '../Images/pf.png';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import question from '../Images/question.png';
import award from '../Images/award.png';
import start from '../Images/start.png';

function About() {
  return (
    <>
      <div className="container" id="intro">
        <div className="row">
          <div className="col-md">
            <h1>About</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">How did this all start?</h5>
              <p className="card-text">LOREM IPSUM</p>
              <a className="btn btn-primary" target="_blank" rel="noreferrer noopener" href="https://github.com/An-Be/react-non-traditionals-blog">View source code</a>
            </div>
          </div>
          </div>
        </div>
      </div>
        <div className="container">
      <div className="row">
                <div className="col-md m-1">
                    <Card className="Card" id="aboutCard">
                       <CardImg className="CardImg"  id="aboutCardImg" src={question} ></CardImg>                    
                       <CardBody>
                           <CardTitle>What is this place?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card className="Card" id='aboutCard'>
                       <CardImg className="CardImg"  id="aboutCardImg" src={award}></CardImg> 
                       <CardBody>
                           <CardTitle>I have a degree can I join?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card className="Card" id="aboutCard">
                       <CardImg className="CardImg" id="aboutCardImg" src={start}></CardImg> 
                       <CardBody>
                           <CardTitle>How do I start?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
            </div>
        </div>

      
      <div className="container">
        <div className="row">
          <div className="col-md">
          <div className="card">
            <div className="card-header">Meet the creator</div>
            <div className="card-body">
              <h5 className="card-title">Andrea Berrocal</h5>
              <img className="card-img-top" id="profile-pic" src={pf} alt="Andrea Berrocal" />
              <p className="card-text">LOREM IPSUM</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
