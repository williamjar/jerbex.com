import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Row, Container, Button, ProgressBar } from 'react-bootstrap';
import bg from './shibuya.jpg';
import { FaNodeJs, FaReact, FaJava, FaPython } from 'react-icons/fa';



export const Summary = ({ title, content, initialWidth, endingWidth }) => {


  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(false)
  const [color, setColor] = useState()


  const config = { mass: 90, tension: 4000, friction: 1500 };
  const enlarge = useSpring({
    config,
    width: hover ? endingWidth : initialWidth
  })

  
  const jumpIn = useSpring({
    config: { mass: 90, tension: 32000, friction: 1000 },

    from: {
      transform:  'translate3d(0,-100px,0)',
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

                  <strong>University</strong>
                  <p>NTNU BSc. Computer Science 2021</p>
                  <p>SCRUM and team projects</p>
                  <p>Computer engineering and theory</p>
                  <p>Real world problem solving</p>
                  <FaNodeJs className="m-3" size={'4em'} />
                  <FaReact size={'4em'} />
                  <FaJava size={'4em'} />
                  <FaPython size={'4em'} />


                  <p />

                  <strong>Mekanisk AS</strong>
                  <p>CAD, production, customer relations, managing business</p>

                  <strong>High school</strong>
                  <p>Vocational ICT/electronics background</p>


                </Card.Text>

              </Card.Body>
            </animated.div>
          

        ) : (null)}


      </Card>


    </animated.div>



  )
}

export default Summary;