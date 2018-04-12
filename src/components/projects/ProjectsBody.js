import React from 'react';
import Divider from '../divider/Divider.js';
import { Container, Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import flappyRaider from "../../assets/flappyRaider.png";
import favaronTechnology from "../../assets/favaronTechnology.png";
import zabesCorner from "../../assets/zabesCorner.png";
import homeAssistant from "../../assets/homeAssistant.png";
import magicMirror from "../../assets/magicMirror.jpg";
import jimmyFavaron from "../../assets/jimmyFavaron.PNG";

export default class ProjectsBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
          <CardColumns>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg top width="100%" src={jimmyFavaron} alt="Card image cap" />
            <CardBody>
              <CardTitle>jimmyfavaron.com</CardTitle>
              <CardSubtitle className="inverse-subtitle">Website, Serverless, ReactJs, React Router, Reactstrap</CardSubtitle>
              <CardText>This was my first fully React and serverless website. Built as a showcase and resume site.</CardText>
              <a href="http://www.jimmyfavaron.com"><Button> Home </Button></a>
            </CardBody>
          </Card>
        <Card>
          <CardImg top width="100%" src={flappyRaider} alt="Card image cap" />
          <CardBody>
            <CardTitle>Flappy Raider</CardTitle>
            <CardSubtitle>Website, Serverless, Bootstrap</CardSubtitle>
            <CardText>This was my first adventure into making an HTML5 video game. Phaser was used for the gravity engine. (Use spacebar to jump!) </CardText>
            <a href="https://s3.amazonaws.com/aws-website-flappyraider-xn8hn/index.html"><Button> View </Button></a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src={favaronTechnology} alt="Card image cap" />
          <CardBody>
            <CardTitle>Favaron Technology</CardTitle>
            <CardSubtitle>Website, Serverless, Bootstrap</CardSubtitle>
            <CardText>This is my landing page used for online advertising of my business.</CardText>
            <a href="http://www.favaron.technology/"><Button> View </Button></a>
          </CardBody>
        </Card>
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={zabesCorner} alt="Card image cap" />
          <CardBody>
            <CardTitle>Zabe's Corner</CardTitle>
            <CardSubtitle className="inverse-subtitle">Website, Serverless, Bootstrap</CardSubtitle>
            <CardText>Prototype project of home library software still in progress. Used for learning how to create serverless APIs with AWS API Gateway and DynamoDB</CardText>
            <a href="https://s3-us-west-2.amazonaws.com/zabes-corner/index.html"><Button> View </Button></a>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={homeAssistant} alt="Card image cap" />
          <CardBody>
            <CardTitle>Home Assistant Server</CardTitle>
            <CardSubtitle>Self-Hosted Application, Hardware Projects, Nest API, Favanet</CardSubtitle>
            <CardText>Using <a href="https://www.home-assistant.io/">Home Assistant</a> running on <a href="https://www.docker.com/">Docker</a> on home server. Scripting home automation functionality and creating control panels around the home.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={magicMirror} alt="Card image cap" />
          <CardBody>
            <CardTitle>Magic Mirror</CardTitle>
            <CardSubtitle>NodeJS, PM2, Raspberry Pi, OpenWeatherApi, Favanet</CardSubtitle>
            <CardText>With the help of MichMich's <a href="https://github.com/MichMich/MagicMirror">Magic Mirror Library</a> running on Raspberry Pi 3. Custom Home Dashboard for calendar events, weather forecast, home temperature, and other various home information.</CardText>
          </CardBody>
        </Card>
      </CardColumns>
        <Divider/>
      </Container>
    );
  }
}
