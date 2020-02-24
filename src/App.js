import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Col, Row, Container, Button, ProgressBar, CardDeck } from 'react-bootstrap';
import { FaNodeJs, FaReact, FaJava, FaPython } from 'react-icons/fa';

import ContentCard from './ContentCard';


//usecontext
const App = () => {

  const jumpIn = useSpring({
    from: {
      transform: 'translate3d(0,-200px,0)',
      opacity: 0,

    },
    transform: 'translate3d(0,0,0)',
    opacity: 1,
  })

  return (

    <Container fluid>
      <animated.div style={jumpIn}>
        <p />
        <h1 className="text-center mt-4">WILLIAM JARBEAUX</h1>
        <h4 className="text-center">COMPUTER SCIENCE STUDENT</h4>

    <Row className="justify-content-center">
          <ContentCard title="summary">

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
          </ContentCard>


          <ContentCard title="projects">

            <p><strong>Harmoni Web App</strong></p>
            <p><strong>Grade calculator</strong></p>
            <p><strong>Mekanisk.XYZ</strong></p>
            <p><strong>Python web compiler</strong></p>

          </ContentCard>



          <ContentCard title="Contact Info">

            <p><strong>william@mekanisk.co</strong></p>
         
          </ContentCard>


        </Row>
       
          


       
      </animated.div>
    </Container>
  )
}

export default App;
