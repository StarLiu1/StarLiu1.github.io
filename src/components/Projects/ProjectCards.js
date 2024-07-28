import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  let linkType1, linkType2;

  // Check if props.linkType is an array and has elements
  if (Array.isArray(props.linkType) && props.linkType.length > 0) {
    // Destructure the first element always
    linkType1 = props.linkType[0];

    // Destructure the second element if it exists
    if (props.linkType.length > 1) {
      linkType2 = props.linkType[1];
    }
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Data&Tech: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <b> {props.date}</b>
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {linkType1}
        </Button>
        {props.link2 ? 
          <Button variant="primary" href={props.link2} target="_blank"className="download-button">
            <BiLinkExternal /> &nbsp;
            {linkType2}
          </Button> : null
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
