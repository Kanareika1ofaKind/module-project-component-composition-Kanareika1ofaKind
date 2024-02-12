import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const URL = 'http://localhost:9009/api/apod?api_key=DEMO_KEY'

export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    function fetchAPOD() {
      axios.get(URL)
        .then(res => {
        // console.log(res.data);
        setData(res.data)
      })
      .catch(err => {
        console.log(err.message);
      })
    }
     fetchAPOD()
     //setApod({
      // "date" : "2024-02-08",
      // "explanation": "Monitoring 68 pulsars with very large radio telescopes, the North American Nanohertz Observatory for Gravity lorem impus40 has uncovered evidence for the gravitational wave(GW) background by carefully measuring slight shifts in the arrival,  these shifts are correlated between different pulsars in a way that indicates that they are caused by GWs. This GW background is likely due to hundreds of thousands or even  millions of supermassive black hole binaries. Teams in Europe are working in the right direction to collarating with the NANO together successfully. Hoorayeee!!! Long live the Creator of the Universe!!! Praise God for creating our galaxies))))) ",
      // "hdurl": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_3000_annotated.jpg",
      // "media_type": "image",
      // "service_version": "v1",
      // "title": "A Message from the Gravitational Universe",
      // "url": "https://apod.nasa.gov/apod/image/2306/Gwb_Nanograv_960_annotated.jpg"
    
    
  }, [])

  if (!data) return <p>'Fetching data...'</p>
  return (
    <section>
     <Card 
        title={data.title}
        text={data.explanation}
        image={data.url}
        author={data.copyright}
        date={data.date}
     />
    </section>
    
  )
}

