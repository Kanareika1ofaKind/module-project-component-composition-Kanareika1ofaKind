import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
        console.log(res.data);
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message);
      })
    }
    // fetchPhoto()
    setApod({
      "date" : "2024-02-08",
      "explanation": "Monitoring 68 pulsars with very large radio telescopes, the North American Nanohertz Observatory for Gravity lorem impus40 has uncovered evidence for the gravitational wave(GW) background by carefully measuring slight shifts in the arrival,  these shifts are correlated between different pulsars in a way that indicates that they are caused by GWs. This GW background is likely due to hundreds of thousands or even  millions of supermassive black hole binaries. Teams in Europe are working in the right direction to collarating with the NANO together successfully. Hoorayeee!!! Long live the Creator of the Universe!!! Praise God for creating our galaxies))))) ",
      "hdurl": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_3000_annotated.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Message from the Gravitational Universe",
      "url": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_960_annotated.jpg"
    })
    
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
     <Card 
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
     />
    </section>
    
  )
}

export default App
