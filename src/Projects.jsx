import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Row, Container, Button, ProgressBar } from 'react-bootstrap';
import bg from './shibuya.jpg';
import { FaNodeJs, FaReact, FaJava, FaPython } from 'react-icons/fa';



export const Projects = ({ title, content, initialWidth, endingWidth }) => {


  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(false)
  const [color, setColor] = useState()


  const config = { mass: 90, tension: 4000, friction: 1500 };
  const enlarge = useSpring({
    config,
    width: hover ? endingWidth : initialWidth
  })

  
  const jumpIn = useSpring({
    config: { mass: 90, tension: 6000, friction: 1000 },


    from: {
      transform:  'translate3d(0,-50px,0)',
      opacity:  0
    },

    to: {
      transform:  'translate3d(0,0px,0)',
      opacity:  1

    }
    
    
    
  })

  const handleHover = (bool) =>
  {
    if(!selected){
      setHover(bool)
    }
    
  }

  const handleSelect= (bool) =>
  {
    setHover(true)
    setSelected(bool)
  }

  return (
    <animated.div style={enlarge}>
      <Card onClick={() => handleSelect(!selected)} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} className="m-4 shadow border-0">
      
        <Card.Title className="m-4 text-center">{title}</Card.Title>
        {hover ? (
          
            <animated.div style={jumpIn}>
              <Card.Body>

                <Card.Text className="text-center">

                <p>Harmoni</p>
                <p>Karakterkalkulator</p>
                <p>Mekanisk.xyz</p>
                 


                </Card.Text>

              </Card.Body>
            </animated.div>
          

        ) : (null)}


      </Card>


    </animated.div>



  )
}

export default Projects;