import React from "react"
import {Card, CardText, CardBody, CardTitle, CardImg, Col} from "reactstrap"

export function ApodFrame (props) {
  return (
    <Col>
      <Card>
        <CardBody>
          <CardTitle>The APOD for {props.date} is {props.title}</CardTitle>
          <CardImg src={props.src} alt={props.title} width="100%" />
          <CardText>{props.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}