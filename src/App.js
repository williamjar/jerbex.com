import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Card, Row,Container,Button, ProgressBar} from 'react-bootstrap';
import bg from './shibuya.jpg';
import Projects, {SuperCard} from './Projects';
import Summary, { SuperCardDetailed } from './Summary';
import Contact from './Contact';


//usecontext
const App = () => {

  const jumpIn = useSpring({
    from: {
      transform:'translate3d(0,-200px,0)',
      opacity:0,
      
     },
     transform:'translate3d(0,0,0)', 
     opacity:1,
  })


  const [hover, setHover] = useState(false)

  const enlarge = useSpring({
    width: hover ? '40rem' : '15rem' 
  })

 

  const projects =[
    "Harmoni",
    "Karakterkalkulator",
    "Mekanisk.xyz"
  ]

  const contact =[
    "william@mekanisk.co",
  ]

  return (
    
    <Container fluid>
    <animated.div  style={jumpIn}>
      <p/>
      <h1 className="text-center mt-4">WILLIAM JARBEAUX</h1>
      <h4 className="text-center">COMPUTER SCIENCE STUDENT</h4>
      
        <Row className="justify-content-center mt-4">

        
          <Summary title="SUMMARY" initialWidth='30rem' endingWidth='35rem'/>
          <Projects title="PROJECTS" content={projects} initialWidth='30rem' endingWidth='35rem'/>
          <Contact title="CONTACT" content={contact} initialWidth='30rem' endingWidth='35rem'/>
          
          </Row>
    </animated.div>
    </Container>
  )
}

export default App;
