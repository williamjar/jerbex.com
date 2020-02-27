import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Row, Container, Button, ProgressBar } from 'react-bootstrap';

export const Summary = ({ title, children, image }) => {

  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(false)

  const enlarge = useSpring({
    config: { mass: 1, tension: 1200, friction: 40 },
    size: hover ? 1 : 2,
    boxShadow: hover ? '10px 10px 10px 10px rgba(0,0,0,0.5)' : '5px 5px 5px 5px rgba(0,0,0,0.2)',
    border: hover ? '10px solid #007185' : '10px solid #353535',
    width: '35rem'
  })

  const handleHover = (bool) => {
    if (!selected) {
      setHover(bool)
    }

  }

  return (
    <animated.div style={enlarge} className="m-4">
      <Card bg="superdark" className="text-white p-4 border-0" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} >

    <Card.Img src={image}></Card.Img>
        <Card.Title className="m-4 text-center">{title.toUpperCase()}</Card.Title>
          <Card.Text>
            {children}
          </Card.Text>
      </Card>
    </animated.div>
  )
}

export default Summary;