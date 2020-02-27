import React, { useState } from 'react';
import { Link, Router, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { Card, Col, Row, Container, Button, ProgressBar, CardDeck, Table } from 'react-bootstrap';
import { FaNodeJs, FaReact, FaJava, FaPython } from 'react-icons/fa';
import ContentCard from './ContentCard';

const harmoni = require('./resources/harmoni.png')
const mekaniskxyz = require('./resources/mekaniskxyz.png')

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
        <h1 className="text-center text-white mt-4">WILLIAM JARBEAUX</h1>
        <h4 className="text-center text-white">COMPUTER SCIENCE STUDENT</h4>

        <Row className="justify-content-center mt-4">
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
        </Row>

        <h4 className="text-center text-white mt-4">PROJECTS</h4>

        <Row className="justify-content-center mt-4">

          <ContentCard image={mekaniskxyz} title="Mekanisk.xyz">
            <p>A website for comparing and gathering information about the products Mekanisk offer</p>
            <Button  onClick={()=> window.open('https://mekanisk.xyz/')} className="float-right">Go to website</Button>
            <Button  onClick={()=> window.open('https://github.com/williamjar/mekanisk.xyz')}>Go to Git-repository</Button>
          </ContentCard>

          <ContentCard image={harmoni} title="Harmoni">
            <p>University SCRUM-project. A website for organizing events in an effective way.</p>

            <Button onClick={()=> window.open('https://github.com/williamjar/Harmoni')}>Go to Git-repository</Button>
          </ContentCard>

          <br />
          <br />
          <br />
        </Row>
      </animated.div>
    </Container>
  )
}

export default App;
