import React, {useEffect, useState} from "react";
import {ApodFrame} from "./ApodFrame";

import axios from 'axios';

import {Container, Row} from "reactstrap"

export function ApodList(){
  const [photo, setPhoto] =useState([])
  
  useEffect(() => { 
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=EwTD8nntFpQflSE62RAmu8EfYamxWLU95x1Gau7D`)//&date=2018-09-25
    .then(res => {
      setPhoto(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(x => {
      console.log(`girlfriend, how did you let him treat you so bad, wo, wo, wo, wo, wo`)
    })
  }, [])
  console.log(photo)

  return (
    <Container>
      <Row>
        <ApodFrame
          date= {photo.date}
          title= {photo.title}
          description= {photo.explanation}
          src= {photo.url}
          type= {photo.media_type}
        />
      </Row>
    </Container>
  )
   
}