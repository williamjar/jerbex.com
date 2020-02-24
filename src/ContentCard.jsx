import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Row, Container, Button, ProgressBar } from 'react-bootstrap';

export const Summary = ({ title, children }) => {

  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(false)

  const enlarge = useSpring({
    config: { mass: 1, tension: 1200, friction: 40 },
    size: hover ? 1 : 2,
    boxShadow: hover ? '10px 10px 10px 10px rgba(0,0,0,0.5)' : '5px 5px 5px 5px rgba(0,0,0,0.2)',
    border: hover ? '10px solid #007185' : '10px solid #ffffff',
    width: '35rem'
  })

  const handleHover = (bool) => {
    if (!selected) {
      setHover(bool)
    }

  }

  return (
    <animated.div style={enlarge} className="m-4">
      <Card className="border-0"onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} >
        <Card.Title className="m-4 text-center">{title.toUpperCase()}</Card.Title>
        <Card.Body>

          <Card.Text className="text-center">
            {children}
          </Card.Text>

        </Card.Body>
      </Card>
      
    </animated.div>



  )
}

export default Summary;