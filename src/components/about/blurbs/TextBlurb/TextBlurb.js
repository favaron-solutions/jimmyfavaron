import React from 'react';

export default class TextBlurb extends React.Component {
  render() {
    return (
      <div>
        <p>
        Hey.
        <br></br>
        <br></br>
        My name is Jimmy and I am a creator, developer, and automator.
        <br></br>
        <br></br>
        I studied Physics and Mathematics while at University and in the process found a passion for coding. 
        <br></br>
        <br></br>
        At home I enjoy self-hosting many services that include, Plex (media streaming), Homeassistant (home automation), Jenkins(CI/CD pipeline), Frigate (NVR with Object Recognition), Factorio (video game server) and many more.  
        <br></br>
        <br></br>
        I enjoy working in the AWS cloud environment and have been since 2015. This site is hosted serverlessly in an S3 bucket and deployed through the previously mentioned Jenkins pipeline, using Terraform.
        <br></br>
        </p>
      </div>
    );
  }
}
