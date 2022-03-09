import React from 'react';
import Divider from '../divider/Divider.js';
import { Container, Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import flappyRaider from "../../assets/flappyRaider.jpg";
import favaronTechnology from "../../assets/favaronTechnology.jpg";
import zabesCorner from "../../assets/zabesCorner.jpg";
import homeAssistant from "../../assets/homeAssistant.png";
import magicMirror from "../../assets/magicMirror.jpg";
import jimmyFavaron from "../../assets/jimmyFavaron.PNG";
import scratch from "../../assets/scratch.png";
import frigate from "../../assets/frigatebackyard.png";

export default class ProjectsBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <h4>Recent</h4>
        <Divider/>
        <CardColumns>          
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={jimmyFavaron} alt="Card image cap" />
            <CardBody>
              <CardTitle>jimmyfavaron.com v2 (2022)</CardTitle>
              <CardSubtitle className="inverse-subtitle">Serverless, Terraform, Jenkins</CardSubtitle>
              <br></br>
              <CardText>Originally built in 2018, the 2022 refactor has brought automated CI/CD deployment and some content changes</CardText>
              <a href="https://www.jimmyfavaron.com"><Button> Home </Button></a>
              <br></br>
              <br></br>
              <a href="https://github.com/jfavaron/jimmyfavaron"><Button> Github </Button></a>
            </CardBody>
          </Card>    
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={frigate} alt="Card image cap" />
            <CardBody>
              <CardTitle>Frigate</CardTitle>
              <CardSubtitle className="inverse-subtitle">Self-hosted, NVR, Object Detection</CardSubtitle>
              <br></br>
              <CardText>Frigate is a self hosted application leveraging IP feeds from cameras on the local network. It has the ability to send screenshots to a Coral TPU for object recognition and detection.</CardText>
              <a href="https://github.com/blakeblackshear/frigate"><Button> Author's Github </Button></a>
              {/* <br></br>
              <br></br>
              <a href="https://www.jimmyfavaron.com/blog"><Button> Blog Post (placeholder) </Button></a> */}
            </CardBody>
          </Card>                  
        </CardColumns>
        <Divider/>
        <h3>Legacy</h3>
        <Divider/>        
          <CardColumns>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={scratch} alt="Card image cap" />
            <CardBody>
              <CardTitle>Scratch</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless Framework, ReactJs, React Router, Reactstrap</CardSubtitle>
              <br></br>
              <CardText>Simple note taking app using the serverless framework with a NodeJS backend. Scratch is completely responsive and will work on any device. Create an account and take some notes yourself!</CardText>
              <a href="https://d32ugifdwq37wt.cloudfront.net/"><Button> View </Button></a>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={jimmyFavaron} alt="Card image cap" />
            <CardBody>
              <CardTitle>jimmyfavaron.com v1 (2018)</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless, ReactJs, React Router, Reactstrap</CardSubtitle>
              <br></br>
              <CardText>This was my first fully React and serverless website. Built as a showcase and resume site.</CardText>
              <a href="https://www.jimmyfavaron.com"><Button> Home </Button></a>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={flappyRaider} alt="Card image cap" />
            <CardBody>
              <CardTitle>Flappy Raider</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless, Bootstrap</CardSubtitle>
              <br></br>
              <CardText>This was my first adventure into making an HTML5 video game. Phaser was used for the gravity engine. (Use spacebar to jump!) </CardText>
              <a href="https://s3.amazonaws.com/aws-website-flappyraider-xn8hn/index.html"><Button> View </Button></a>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={favaronTechnology} alt="Card image cap" />
            <CardBody>
              <CardTitle>Favaron Technology</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless, Bootstrap</CardSubtitle>
              <br></br>
              <CardText>This is my landing page used for online advertising of my business.</CardText>
              <a href="http://www.favaron.technology/"><Button> View </Button></a>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={zabesCorner} alt="Card image cap" />
            <CardBody>
              <CardTitle>Zabe's Corner</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless, Bootstrap</CardSubtitle>
              <br></br>
              <CardText>Prototype project of home library software still in progress. Used for learning how to create serverless APIs with AWS API Gateway and DynamoDB</CardText>
              <a href="https://s3-us-west-2.amazonaws.com/zabes-corner/index.html"><Button> View </Button></a>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={homeAssistant} alt="Card image cap" />
            <CardBody>
              <CardTitle>Home Assistant Server</CardTitle>
              <CardSubtitle className="inverse-subtitle">Self-Hosted Application, Hardware Projects, Nest API, Favanet</CardSubtitle>
              <br></br>
              <CardText>Using <a href="https://www.home-assistant.io/">Home Assistant</a> running on <a href="https://www.docker.com/">Docker</a> on home server. Scripting home automation functionality and creating control panels around the home.</CardText>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={magicMirror} alt="Card image cap" />
            <CardBody>
              <CardTitle>Magic Mirror</CardTitle>
              <CardSubtitle className="inverse-subtitle">NodeJS, PM2, Raspberry Pi, OpenWeatherApi, Favanet</CardSubtitle>
              <CardText>With the help of MichMich's <a href="https://github.com/MichMich/MagicMirror">Magic Mirror Library</a> running on Raspberry Pi 3. Custom Home Dashboard for calendar events, weather forecast, home temperature, and other various home information.</CardText>
            </CardBody>
          </Card>
        </CardColumns>
        <Divider/>
      </Container>
    );
  }
}
