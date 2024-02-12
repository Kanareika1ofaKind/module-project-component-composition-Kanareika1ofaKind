import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width:  60%;

  figcaption {
    font-style: italic;
  }
`

export default function Figure({ image, author, date }) {
  return (
    <StyledFigure>
      <img src={image} />
      <figcaption>Awesome pic taken on {author} on {date}
      </figcaption>
    </StyledFigure>
  )
}