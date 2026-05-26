import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Post = (props) => {
  return (
    <div>
      <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width='100%' src={props.postImage} alt='Card image cap' />
        <CardBody>
          <CardTitle>{props.postTitle}</CardTitle>
          <CardSubtitle className="inverse-subtitle">{props.postSubtitle}</CardSubtitle>
          <CardText>{props.postText}</CardText>
          <Button>Read</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
