import React, {useEffect, useState} from "react";

import axios from 'axios';

export function ApodList(){
  const [photos, setPhotos] =useState([])
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-25`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(x => {
      console.log(`girlfriend, how did you let him treat you so bad, wo, wo, wo, wo, wo`)
    })
  }, [])

  return (
    <div></div>
  )
   
}