import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import question from '../Images/question.png';
import award from '../Images/award.png';
import start from '../Images/start.png';




function Home(){
    return(
        <>
        <div className="container" id="intro">
            <div className="row">
                <div className="col-md">
                    <h1>Welcome to Non-Traditionals Blog &#128075;</h1>
                    <p>LOREM IPSUM</p>
                </div>
            </div>                            
        </div>
        <hr/>
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Card className="Card">
                       <CardImg className="CardImg" src={question} ></CardImg>                    
                       <CardBody>
                           <CardTitle>What is this place?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card className="Card">
                       <CardImg className="CardImg" src={award}></CardImg> 
                       <CardBody>
                           <CardTitle>I have a degree can I join?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card className="Card">
                       <CardImg className="CardImg" src={start}></CardImg> 
                       <CardBody>
                           <CardTitle>How do I start?</CardTitle>
                           <CardText>LOREM IPSUM</CardText>
                       </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
}

export default Home;